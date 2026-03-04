import { StudentsItem } from '../StudentsItem/StudentsItem';
import type { Student } from '../../types.ts';

interface StudentListProps {
  students: Student[];
}

export const StudentList = ({ students }: StudentListProps) => {
  return (
    <ul className="student-list">
      {students.map(student => (
        <StudentsItem key={student.id} student={student} />
      ))}
    </ul>
  );
};
