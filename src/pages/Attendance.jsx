import { SplineChart } from '../components';
import { FaFileExport } from 'react-icons/fa';
import { Progress, RecentProfile } from '../components';
import { PiStudentBold } from 'react-icons/pi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { studentAttendanceData, teacherAttendanceData } from '../data/dummy';
import Prof1 from '../images/pict-1.jpeg';
import Prof2 from '../images/pict-2.jpeg';
import Prof3 from '../images/pict-3.jpeg';
import Prof4 from '../images/pict-4.jpeg';
import Prof5 from '../images/pict-5.jpeg';
import Prof6 from '../images/pict-6.jpeg';
import Prof7 from '../images/pict-7.jpeg';

const Attendance = () => {

    return (
        <div>
            <div className='flex justify-between items-center w-4/5'>
                <p className='font-medium text-2xl pl-4 text-slate-800'>Attendance</p>

                <div>
                    <button className="flex justify-between items-center text-slate-500 px-5 py-1 font-medium border-2 rounded-md">
                        <span className='mr-2'>{<FaFileExport />}</span> Export
                    </button>
                </div>
            </div>

            <div className='flex'>
                <div className='w-4/5'>
                    <div className={`ml-14 mt-3`}>
                        <p className='font-medium text-xl text-slate-800 mb-4'>Student</p>
                        <SplineChart dataSource={studentAttendanceData} fillColor="#86efac" borderColor="#16a34a" toolTipColor="#4ade80" />
                    </div>

                    <div className={`ml-14 mt-3`}>
                        <p className='font-medium text-xl text-slate-800 mb-4'>Teacher</p>
                        <SplineChart dataSource={teacherAttendanceData} fillColor="#fed7aa" borderColor="#f97316" toolTipColor="#fdba74" />
                    </div>

                    <div className={`ml-14 mt-3`}>
                        <p className='font-medium text-xl text-slate-800 mb-4'>Staff</p>
                        <SplineChart dataSource={teacherAttendanceData} fillColor="#a5b4fc" borderColor="#4f46e5" toolTipColor="#a5b4fc" />
                    </div>
                </div>
                <div className='w-1/5 -z-50'>
                    <h2 className='font-semibold text-slate-800 text-lg px-5'>Today's Attendance</h2>
                    <div className='flex justify-between items-center px-4 mt-6'>
                        <Progress value={78} icon={< PiStudentBold className='text-green-500' />} inside="#bbf7d0" outside="#22c55e" />
                        <div className='flex flex-col items-start w-4/5 ml-8'>
                            <p className='text-slate-400 font-normal text-base'>Students</p>
                            <p className='text-green-500 font-semibold text-2xl'>238 / 302</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-4 mt-6'>
                        <Progress value={87} icon={< FaChalkboardTeacher className='text-orange-400' />} inside="#fed7aa" outside="#fb923c" />
                        <div className='flex flex-col items-start w-4/5 ml-8'>
                            <p className='text-slate-400 font-normal text-base'>Teachers</p>
                            <p className='text-orange-400 font-semibold text-2xl'>29 / 33</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-4 mt-6'>
                        <Progress value={28} icon={< FaChalkboardTeacher className=' text-indigo-500' />} inside="#a5b4fc" outside="#818cf8" />
                        <div className='flex flex-col items-start w-4/5 ml-8'>
                            <p className='text-slate-400 font-normal text-base'>Staff</p>
                            <p className='text-indigo-400 font-semibold text-2xl'>8 / 28</p>
                        </div>
                    </div>

                    <h2 className='font-semibold text-slate-800 text-lg px-5 mt-6'>Recent Attendance</h2>

                    <RecentProfile prof={Prof1} name="Courtesy Henry" dept="Social 2 Science" mins="7 mins ago" />
                    <RecentProfile prof={Prof2} name="Jenny Williams" dept="Science 2" mins="18 mins ago" />
                    

                    <div className='flex justify-between mt-6 px-4'>
                        <div className='w-16 h-16 rounded-full'>
                            <img className='rounded-full' src={Prof3} alt="img-3" />
                        </div>
                        <div className='flex flex-col items-start justify-center w-4/5 ml-8'>
                            <p className='text-slate-800 font-medium text-base'>Jerome Belf</p>
                            <p className='text-slate-400 font-normal text-base'>Sociology</p>
                            <p className='text-slate-400 font-normal text-base'>25 mins ago</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-6 px-4'>
                        <div className='w-16 h-16 rounded-full'>
                            <img className='rounded-full' src={Prof4} alt="img-4" />
                        </div>
                        <div className='flex flex-col items-start justify-center w-4/5 ml-8'>
                            <p className='text-slate-800 font-medium text-base'>Wade Warren</p>
                            <p className='text-slate-400 font-normal text-base'>Science</p>
                            <p className='text-slate-400 font-normal text-base'>37 mins ago</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-6 px-4'>
                        <div className='w-16 h-16 rounded-full'>
                            <img className='rounded-full' src={Prof5} alt="img-5" />
                        </div>
                        <div className='flex flex-col items-start justify-center w-4/5 ml-8'>
                            <p className='text-slate-800 font-medium text-base'>Zach Sweger</p>
                            <p className='text-slate-400 font-normal text-base'>Science 2</p>
                            <p className='text-slate-400 font-normal text-base'>49 mins ago</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-6 px-4'>
                        <div className='w-16 h-16 rounded-full'>
                            <img className='rounded-full' src={Prof6} alt="img-6" />
                        </div>
                        <div className='flex flex-col items-start justify-center w-4/5 ml-8'>
                            <p className='text-slate-800 font-medium text-base'>Savannah Nguyen</p>
                            <p className='text-slate-400 font-normal text-base'>Sociology</p>
                            <p className='text-slate-400 font-normal text-base'>52 mins ago</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-6 px-4'>
                        <div className='w-16 h-16 rounded-full'>
                            <img className='rounded-full' src={Prof7} alt="img-7" />
                        </div>
                        <div className='flex flex-col items-start justify-center w-4/5 ml-8'>
                            <p className='text-slate-800 font-medium text-base'>Jane Cooper</p>
                            <p className='text-slate-400 font-normal text-base'>Science</p>
                            <p className='text-slate-400 font-normal text-base'>1 hour ago</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Attendance;