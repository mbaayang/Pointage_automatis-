import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center align-items-center nav">
            {" "}
            <svg
              width="42"
              height="40"
              viewBox="0 0 42 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6501 27.5C13.4932 27.5 13.3364 27.5273 13.1868 27.5852C12.3363 27.9141 11.4418 28.125 10.5001 28.125C9.55836 28.125 8.6639 27.9141 7.81274 27.5852C7.66312 27.5273 7.50693 27.5 7.35009 27.5C3.27741 27.5 -0.0215502 31.4438 0.000106016 36.2984C0.00929349 38.35 1.42613 40 3.1501 40H17.8501C19.574 40 20.9909 38.35 21.0001 36.2984C21.0217 31.4438 17.7227 27.5 13.6501 27.5ZM10.5001 
25C13.9795 25 16.8001 21.6422 16.8001 17.5C16.8001 13.3578 13.9795 10 10.5001 10C7.02065 10 4.2001 13.3578 4.2001 17.5C4.2001 
21.6422 7.02065 25 10.5001 25ZM38.85 0H13.6501C11.913 0 10.5001 1.73828 10.5001 3.87422V7.5C12.037 7.5 13.4598 8.02969 14.7001 8.89063V5H37.8V27.5H33.6V22.5H25.2V27.5H20.1968C21.4502 28.8039 22.3703 30.5258 22.8015 32.5H38.85C40.5871 32.5 42 30.7617 42 28.6258V3.87422C42 1.73828 40.5871 0 38.85 0Z"
                fill="#306887"
              />
            </svg>
            <p className="h4 text-nav">Liste des employés</p>
          </div>
        </div>
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>
  );
};

export default Dashboard;
