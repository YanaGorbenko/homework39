import type { Student } from '../../types.ts';

interface StudentItemProps {
  student: Student;
}

export const StudentsItem = ({ student }: StudentItemProps) => {
  const handleClick = () => {
    console.log('Clicked');
  };
  return (
    <>
      <li key={student.id}>
        <p>Ім'я студента: {student.name}</p>
        <p>Вік студента: {student.age}</p>
        <p>Курс навчання: {student.course}</p>
        <img src={student.avatar} alt="avatar" />
        {student.isOnline ? <p>Online</p> : <p>Offline</p>}
        <button onClick={handleClick}>Подивитись профіль</button>
      </li>
    </>
  );
};
