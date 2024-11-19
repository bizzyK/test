import EmployeeForm from '../components/EmployeeForm';
import EmployeeList from '../components/EmployeeList';

export default function Home() {
    return (
        <div>
            <h1>Employee Application</h1>
            <EmployeeForm />
            <EmployeeList />
        </div>
    );
}