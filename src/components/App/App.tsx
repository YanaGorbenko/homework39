import { students } from '../../data.ts';
import { useState } from 'react';
import { StudentList } from '../StudentsList/StudentList.tsx';

export const App = () => {
  const [studentsList] = useState(students);
  return <StudentList students={studentsList} />;
};
