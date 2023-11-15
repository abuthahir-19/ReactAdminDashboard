import Avatar from '../images/pict-11.jpeg';
import { Table, TableBody, TableHead, TableContainer, TableRow, TableCell, Paper } from "@mui/material";
import { studentDatabase } from '../data/dummy';
import { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';

const Student = () => {
    const [studentData, setStudentData] = useState (studentDatabase);
    const { setRowClicked } = useStateContext();

    const handleDataClick = (ID) => {
        setStudentData (prevData => {
            let newData = prevData.map (val => val.clicked ? { ...val, clicked: false} : { ...val });
            let upd = newData.find (item => item.ID === ID);
            upd.clicked = true;
            newData.splice (newData.indexOf (upd), 1, upd);
            return newData;
        });
        // console.log (studentData)
        setRowClicked (true);
    };

    return (
        <TableContainer component={Paper} sx={{ boxShadow: '2px 2px 10px #d1d5db, -2px -2px 10px #d1d5db', width: '100%', borderRadius: '10px'}}>
            <Table sx={{ minWidth: 820 }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '17px' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '17px' }} align="center">ID</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '17px' }} align="center">Class</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '17px' }} align="center">Age</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '17px' }} align="center">Gender</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '17px' }} align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentData.map(student => (
                        <TableRow
                            key={student.ID}
                            sx={{ cursor: 'pointer' }}
                            className={`${student.clicked ? 'bg-green-400' : 'hover:bg-slate-200'} `}
                            onClick={() => handleDataClick (student.ID)}
                        >
                            <TableCell component="th" scope='row' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', border: 'none', padding: '10px'}}>
                                <img className='w-11 h-11 rounded-full' src={Avatar} alt="ProfilePic" />
                                <span className='ml-5'>{student.name}</span>
                            </TableCell>
                            <TableCell sx={{ border: 'none', padding: '10px' }} align="center">{student.ID}</TableCell>
                            <TableCell sx={{ border: 'none', padding: '10px' }} align="center">{student.Class}</TableCell>
                            <TableCell sx={{ border: 'none', padding: '10px' }} align="center">{student.Age}</TableCell>
                            <TableCell sx={{ border: 'none', padding: '10px' }} align="center">{student.Gender}</TableCell>
                            <TableCell sx={{ border: 'none', padding: '10px' }} align="center">{student.Email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Student;