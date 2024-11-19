import { useEffect, useState } from 'react';

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const res = await fetch('/api/employees');
            const data = await res.json();
            setEmployees(data);
        };
        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} - {employee.role} ({employee.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}