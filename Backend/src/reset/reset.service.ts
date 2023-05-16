import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { log } from "console";
import * as nodemailer from "nodemailer";
import { Employes } from "src/employes/entities/employe.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class ResetService {
  cle = "1hleQjg4cdi@klo9u0";
  code = "";
  private transporter: nodemailer.Transporter;

  constructor(
    @InjectRepository(Employes)
    private readonly userRepository: Repository<Employes>
  ) {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "mouhamedlamine.ngom@unchk.edu.sn",
        pass:
          this.cle[4] +
          this.cle[8] +
          this.cle[16] +
          this.cle[10] +
          this.cle[12] +
          this.cle[11] +
          this.cle[0] +
          this.cle[7] +
          this.cle[17] +
          this.cle[15],
      },
    });
  }

  async sendEmail(to: string): Promise<void> {
    //Dabord on vérifie si le mail existe dans la base de donnée et n'est pas archiver
    const email = to;
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && user.etat) {
      //On génére un nombre aléatoire qu'on va stocker dans la base de celui qui veut modifier son mdp
      const min = 0;
      const max = 99999;
      const randomNumber = (
        Math.floor(Math.random() * (max - min + 1)) + min
      ).toString();
      //on crypte ça
      const code = await bcrypt.hash(randomNumber, 10);
      this.userRepository.update(user.id, { secretKey: code });

      const mailOptions: nodemailer.SendMailOptions = {
        from: "mouhamedlamine.ngom@unchk.edu.sn",
        to,
        subject: "Reinitialiser mot de passe",
        text: ` Reinitialiser votre mot de passe avec le code : ${randomNumber}`,
      };

      try {
        await this.transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      throw new UnauthorizedException({
        correct: false,
        message: "Le compte n'existe plus dans la base de donnée",
      });
    }
  }

  async sendResponse(
    code: string,
    password: string,
    email: string
  ): Promise<void> {
    const user = await this.userRepository.findOne({ where: { email } });
    const valid = await bcrypt.compare(code, user.secretKey);

    if (!valid) {
     /*  console.log("incorrect"); */
     throw new NotFoundException("User not found");
    } else {
      /* throw new UnauthorizedException({
        correct: false,
        message: "valide",
      }); */
      console.log("exact tu peut modifier le mot de passe");
      /*  const hashedNewPassword = await bcrypt.hash(password, 10);
        user.mot_de_passe = hashedNewPassword;
        await this.employesRepository.save(user); */
    }
  }
}
