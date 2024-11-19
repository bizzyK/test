import { useEffect, useState } from 'react';

export default function EmployeeList() {
    // TODO: Fetch employees from GET /api/employees and display them
    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {/* Map over fetched employees here */}
                <li>Example: John Doe - Developer (john.doe@example.com)</li>
            </ul>
        </div>
    );
}