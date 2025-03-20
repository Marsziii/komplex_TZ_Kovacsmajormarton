import { useState, useEffect } from "react";
import axios from "axios";
 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
 
function Felvettek() {
    const [data, setData] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:5000/diakok")
            .then(response => setData(response.data))
            .catch(error => console.error("Hiba:", error));
    }, []);
 
    return (
        <div className="col-md-6 ">
            <h2 className=" my-4">Előzetes Névsor</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Tanuló neve</th>
                    <th>Ágazat</th>
                    <th>Összes pontszám</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.oktazon}>
                        <td>{row.nev}</td>
                        <td>{row.agazat}</td>
                        <td>{row.osszpont}</td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
 
 
export default Felvettek;
 