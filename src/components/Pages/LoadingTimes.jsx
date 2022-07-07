import { CogIcon } from '@heroicons/react/outline';
import React from 'react'
import { run } from '../../api/PSI';
import Research from './Research';

export const LoadingTimes = () => {
  const [results, setResults] = React.useState([]);
  const [inputSite, setInputSite] = React.useState('');
  const [researching, setResearching] = React.useState(false);

  const handleSubmit = async (event) => {
  	event.preventDefault();
    setResearching(true);
    const result = await run(inputSite, false);
    const newRow = {
      date: result.analysisUTCTimestamp,
      id: result.id,
      time: result.lighthouseResult.audits['interactive'].displayValue,
    }
    setResults([...results, newRow]);
    setInputSite('');
    setResearching(false);
  }

  return (
    <div>
      <div className='p-5 grid grid-cols-6 sm:grid-cols-8 text-center'>
        <h1 className='col-start-3 col-span-2 sm:col-start-4 sm:col-span-2'>Loading Times</h1>
      </div>

      <form onSubmit={handleSubmit} className='p-5 grid grid-cols-6 sm:grid-cols-8'>
        <input 
          type='text' 
          value={inputSite}
          onChange={event => setInputSite(event.target.value)}
          placeholder='Site to test' 
          required
          className='outline outline-1 rounded col-start-2 col-span-2 sm:col-start-3 sm:col-span-2'
        />
        <div className='pl-4 col-start-4 col-span-2 sm:col-start-5 sm:col-span-2'>
          <button className='w-full flex justify-center'>
            {
              researching? <CogIcon className='animate-spin w-6 bg-white' /> :
              <div className='bg-gray-300 rounded w-full'>Test</div>
            }
          </button>
        </div>
      </form>

      <div className='grid grid-cols-6 sm:grid-cols-8 text-center'>
        <table className='table-auto col-start-2 col-span-4 sm:col-span-6 sm:col-start-2'>
          <thead>
            <tr className='bg-gray-300 h-12'>
              <th className='rounded-tl-lg'>Date</th>
              <th>Site</th>
              <th className='rounded-tr-lg'>Time</th>
            </tr>
          </thead>
          <tbody>
              {
                results.map(result => <Research key={result.date} research={result} />)
              }
            <tr className='bg-gray-300 h-4'>
              <td className='rounded-bl-lg'></td>
              <td></td>
              <td className='rounded-br-lg'></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
