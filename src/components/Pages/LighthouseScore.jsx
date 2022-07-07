import React from 'react'
import { CogIcon } from '@heroicons/react/outline';
import { run } from '../../api/PSI';

export const LighthouseScore = () => {
    const [result, setResults] = React.useState(null);
    const [inputSite, setInputSite] = React.useState('');
    const [researching, setResearching] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResearching(true);
        setResults(null);
        const result = await run(inputSite, true);
        const newScores = {
            accessibility: result.lighthouseResult.categories['accessibility'].score * 100,
            bestpractices: result.lighthouseResult.categories['best-practices'].score * 100,
            performance: result.lighthouseResult.categories['performance'].score * 100,
            pwa: result.lighthouseResult.categories['pwa'].score * 100,
            seo: result.lighthouseResult.categories['seo'].score * 100,
        }
        setResults(newScores);
        setInputSite('');
        setResearching(false);
    }

  return (
    <div className='pt-10'>
      <div className='p-5 grid grid-cols-6 sm:grid-cols-8 text-center'>
        <h1 className='col-start-3 col-span-2 sm:col-start-4 sm:col-span-2'>Lighthouse Score</h1>
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
        <div className='col-start-2 col-span-4 sm:col-span-6 sm:col-start-2'>
            <div className='grid grid-cols-12 text-xs'>
                <div className='col-start-2 col-span-2 grid justify-items-center'>
                    <div className='rounded-full bg-gray-200 w-12 h-12 pt-4'>{result === null? '00' : result.accessibility}</div>
                    <div>Accessibility</div>
                </div>
                <div className='col-start-4 col-span-2 grid justify-items-center'>
                    <div className='rounded-full bg-gray-200 w-12 h-12 pt-4'>{result === null? '00' : result.bestpractices}</div>
                    <div>Best-practices</div>
                </div>
                <div className='col-start-6 col-span-2 grid justify-items-center'>
                    <div className='rounded-full bg-gray-200 w-12 h-12 pt-4'>{result === null? '00' : result.performance}</div>
                    <div>Performance</div>
                </div>
                <div className='col-start-8 col-span-2 grid justify-items-center'>
                    <div className='rounded-full bg-gray-200 w-12 h-12 pt-4'>{result === null? '00' : result.pwa}</div>
                    <div>PWA</div>
                </div>
                <div className='col-start-10 col-span-2 grid justify-items-center'>
                    <div className='rounded-full bg-gray-200 w-12 h-12 pt-4'>{result === null? '00' : result.seo}</div>
                    <div>SEO</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}