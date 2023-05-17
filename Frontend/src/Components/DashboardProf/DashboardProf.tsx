import "./DashboardProf.css";
import certificat from "../../assets/certificate.svg";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import certificat_night from "../../assets/certificate_night.svg";
function DashboardProf() {
    const [niveau1, setNiveau1] = useState(0);
    const [niveau2, setNiveau2] = useState(0);
    const [niveau3, setNiveau3] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3000/presence-etudiants", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json())
            .then((res) => {
                const currentDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
                const niveau1Etudiants = res.filter((item: any) => {
                    return item.etudiant.niveau === "1 ère année" && item.date == currentDate;
                });
                const niveau2Etudiants = res.filter((item: any) => {
                    return item.etudiant.niveau === "2 ème année" && item.date == currentDate;
                });
                const niveau3Etudiants = res.filter((item: any) => {
                    return item.etudiant.niveau === "3 ème année" && item.date == currentDate;
                });

                setNiveau1(niveau1Etudiants.length);
                setNiveau2(niveau2Etudiants.length);
                setNiveau3(niveau3Etudiants.length);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <Link to="presenceEtudiant" className="col"
                    onClick={() => {
                        localStorage.removeItem("annee");
                        localStorage.setItem("annee", "1 ère année");
                    }}>
                    <div className={`d-flex justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-moon" : "nav" } `}>
                        <svg
                            width="40"
                            height="42"
                            viewBox="0 0 47 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.5085 26.3L23.5 34.1254L13.4915 26.3C5.9904 26.5543 0 31.3529 0 37.2752V38.0627C0 40.2364 2.25558 42 5.03571 42H41.9643C44.7444 42 47 40.2364 47 38.0627V37.2752C47 31.3529 41.0096 26.5543 33.5085 26.3ZM1.42679 6.54783L2.09821 6.67087V11.4613C1.36384 11.8058 0.839286 12.4046 0.839286 13.1264C0.839286 13.8154 1.32188 14.3896 2.00379 14.7423L0.367188 19.8526C0.188839 20.4186 0.5875 21.001 1.16451 21.001H5.54978C6.12679 21.001 6.52545 20.4186 6.3471 19.8526L4.71049 14.7423C5.39241 14.3896 5.875 13.8154 5.875 13.1264C5.875 12.4046 5.35045 11.8058 4.61607 11.4613V7.14662L11.5402 8.45086C10.6379 9.86173 10.0714 11.4366 10.0714 13.1264C10.0714 18.9257 16.0828 23.6259 23.5 23.6259C30.9172 23.6259 36.9286 18.9257 36.9286 13.1264C36.9286 11.4366 36.3725 9.86173 35.4598 8.45086L45.5627 6.54783C47.4721 6.18691 47.4721 4.32489 45.5627 3.96397L25.5877 0.190713C24.2239 -0.0635711 22.7866 -0.0635711 21.4228 0.190713L1.42679 3.95576C-0.472098 4.31668 -0.472098 6.18691 1.42679 6.54783Z"
                                fill="#306887" />
                        </svg>
                        <p className={`h4 ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }`}>1 ère année</p>
                    </div>
                    <div className={`d-flex flex-column justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-blanc-moon" : "nav-blanc" }`}>
                        <p className={`h4  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }`}>Effectifs</p>
                        <div
                            className="image-edit"
                            style={{
                                backgroundImage: `url(${localStorage.getItem("night") ? certificat_night : certificat })`,
                            }}>
                            <span className={`text-5xl cursor-pointer  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" } `}> {niveau1} </span>
                        </div>
                    </div>
                </Link>
                <Link to="presenceEtudiant" className="col"
                    onClick={() => {
                        localStorage.removeItem("annee");
                        localStorage.setItem("annee", "2 ème année");
                    }}>
                    <div className={`d-flex justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-moon" : "nav" } `}>
                        <svg
                            width="40"
                            height="42"
                            viewBox="0 0 47 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.5085 26.3L23.5 34.1254L13.4915 26.3C5.9904 26.5543 0 31.3529 0 37.2752V38.0627C0 40.2364 2.25558 42 5.03571 42H41.9643C44.7444 42 47 40.2364 47 38.0627V37.2752C47 31.3529 41.0096 26.5543 33.5085 26.3ZM1.42679 6.54783L2.09821 6.67087V11.4613C1.36384 11.8058 0.839286 12.4046 0.839286 13.1264C0.839286 13.8154 1.32188 14.3896 2.00379 14.7423L0.367188 19.8526C0.188839 20.4186 0.5875 21.001 1.16451 21.001H5.54978C6.12679 21.001 6.52545 20.4186 6.3471 19.8526L4.71049 14.7423C5.39241 14.3896 5.875 13.8154 5.875 13.1264C5.875 12.4046 5.35045 11.8058 4.61607 11.4613V7.14662L11.5402 8.45086C10.6379 9.86173 10.0714 11.4366 10.0714 13.1264C10.0714 18.9257 16.0828 23.6259 23.5 23.6259C30.9172 23.6259 36.9286 18.9257 36.9286 13.1264C36.9286 11.4366 36.3725 9.86173 35.4598 8.45086L45.5627 6.54783C47.4721 6.18691 47.4721 4.32489 45.5627 3.96397L25.5877 0.190713C24.2239 -0.0635711 22.7866 -0.0635711 21.4228 0.190713L1.42679 3.95576C-0.472098 4.31668 -0.472098 6.18691 1.42679 6.54783Z"
                                fill="#306887" />
                        </svg>
                        <p className={`h4 ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }`}>2 ère année</p>
                    </div>
                    <div className={`d-flex flex-column justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-blanc-moon" : "nav-blanc" }`}>
                        <p className={`h4  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }`}>Effectifs</p>
                        <div
                            className="image-edit"
                            style={{
                                backgroundImage: `url(${localStorage.getItem("night") ? certificat_night : certificat })`,
                            }}>
                            <span className={`text-5xl cursor-pointer  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" } `}> {niveau2} </span>
                        </div>
                    </div>
                </Link>
                <Link to="presenceEtudiant" className="col"
                    onClick={() => {
                        localStorage.removeItem("annee");
                        localStorage.setItem("annee", "3 ème année");
                    }}>
                    <div className={`d-flex justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-moon" : "nav" } `}>
                        <svg
                            width="40"
                            height="42"
                            viewBox="0 0 47 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.5085 26.3L23.5 34.1254L13.4915 26.3C5.9904 26.5543 0 31.3529 0 37.2752V38.0627C0 40.2364 2.25558 42 5.03571 42H41.9643C44.7444 42 47 40.2364 47 38.0627V37.2752C47 31.3529 41.0096 26.5543 33.5085 26.3ZM1.42679 6.54783L2.09821 6.67087V11.4613C1.36384 11.8058 0.839286 12.4046 0.839286 13.1264C0.839286 13.8154 1.32188 14.3896 2.00379 14.7423L0.367188 19.8526C0.188839 20.4186 0.5875 21.001 1.16451 21.001H5.54978C6.12679 21.001 6.52545 20.4186 6.3471 19.8526L4.71049 14.7423C5.39241 14.3896 5.875 13.8154 5.875 13.1264C5.875 12.4046 5.35045 11.8058 4.61607 11.4613V7.14662L11.5402 8.45086C10.6379 9.86173 10.0714 11.4366 10.0714 13.1264C10.0714 18.9257 16.0828 23.6259 23.5 23.6259C30.9172 23.6259 36.9286 18.9257 36.9286 13.1264C36.9286 11.4366 36.3725 9.86173 35.4598 8.45086L45.5627 6.54783C47.4721 6.18691 47.4721 4.32489 45.5627 3.96397L25.5877 0.190713C24.2239 -0.0635711 22.7866 -0.0635711 21.4228 0.190713L1.42679 3.95576C-0.472098 4.31668 -0.472098 6.18691 1.42679 6.54783Z"
                                fill="#306887" />
                        </svg>
                        <p className={`h4 ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }`}>3 ère année</p>
                    </div>
                    <div className={`d-flex flex-column justify-content-center align-items-center gap-2 rounded-top  ${localStorage.getItem("night") ? "nav-blanc-moon" : "nav-blanc" }`}>
                        <p className={`h4  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" }`}>Effectifs</p>
                        <div
                            className="image-edit"
                            style={{
                                backgroundImage: `url(${localStorage.getItem("night") ? certificat_night : certificat })`,
                            }}>
                            <span className={`text-5xl cursor-pointer  ${localStorage.getItem("night") ? "text-color-moon" : "text-color" } `}> {niveau3} </span>
                        </div>
                    </div>
                </Link>
    
       
      </div>
    </div>
  );
}

export default DashboardProf;
