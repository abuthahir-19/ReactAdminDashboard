import { SplineChart } from '../components';
import { FaFileExport } from 'react-icons/fa';

const Attendance = () => {

    return (
        <div>
            <div className='flex justify-between items-center w-[80%]'>
                <p className='font-medium text-2xl pl-4 text-slate-800'>Attendance</p>

                <div>
                    <button className="flex justify-between items-center text-slate-500 px-5 py-1 font-medium border-2 rounded-md">
                        <span className='mr-2'>{<FaFileExport />}</span> Export
                    </button>
                </div>
            </div>

            <div className='flex gap-3'>
                <div className='w-[80%]'>
                    <div className={`ml-14 mt-3`}>
                        <p className='font-medium text-xl text-slate-800 mb-4'>Student</p>
                        <SplineChart fillColor="#4ade80" borderColor="#16a34a" toolTipColor="#4ade80" />
                    </div>

                    <div className={`ml-14 mt-3`}>
                        <p className='font-medium text-xl text-slate-800 mb-4'>Teacher</p>
                        <SplineChart fillColor="#fdba74" borderColor="#f97316" toolTipColor="#fdba74" />
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-slate-800 text-lg'>Today's Attendance</h2>
                </div>
            </div>
        </div>
    )
}

export default Attendance;