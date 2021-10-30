import React from 'react';
import styles from '../styles/EOM.module.css' 
function EOM({employee}) {
    return (
        <div className="page-container">
            <div className={styles.EOM}>
                <h1>EOM page</h1>
                <h3>{employee.name}</h3>
                <h4>{employee.position}</h4>
                <img className={styles.img1} src={employee.image} alt={employee.name} />
                <p>{employee.description}</p>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext =>{
    const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');
    const employee = await apiResponse.json();
        return{
            props: {
              employee,
            },
          };
    }

export default EOM
