export default function EmployeeForm() {
    return (
        <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Role" />
            <input type="email" placeholder="Email" />
            <button type="submit">Add Employee</button>
        </form>
    );
}