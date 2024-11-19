export default function EmployeeForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement form submission to POST /api/employees
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Role" />
            <input type="email" placeholder="Email" />
            <button type="submit">Add Employee</button>
        </form>
    );
}