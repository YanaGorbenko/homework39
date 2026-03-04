import { StudentsItem } from '../StudentsItem/StudentsItem';
import type { Student } from '../../types.ts';

interface StudentListProps {
  students: Student[];
}

export const StudentList = ({ students }: StudentListProps) => {
  return (
    <ul className="student-list">
      {students.map(student => (
        <li key={student.id}>
          <StudentsItem student={student} />
        </li>
      ))}
    </ul>
  );
};
