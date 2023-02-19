import { useContext } from 'react'

import AppLevelContext from '../context/AppLevelContext'

const Horizon = () => {
  const { filters, setFilters } = useContext(AppLevelContext)
  const { darkmode, setDarkmode } = useContext(AppLevelContext)
  return (
    <div className='horizon'>
      <select
        name=''
        id=''
        onChange={(e) => {
          setFilters(e.target.value)
        }}
      >
        <option value='' hidden>
          Select Filter
        </option>
        <option value='all'>All</option>
        <option value='10'>Aşırı Sağ</option>
        <option value='7'>Merkez Sağ</option>
        <option value='5'>Merkez Sol</option>
        <option value='3'>Sol</option>
        <option value='1'>Aşırı Sol</option>
      </select>
      Click here if you want to switch the dark mode
      <input  
        type="checkbox"
        value="check"
        onChange={e => setDarkmode(value => !value)}
        />
    </div>
  )
}

export default Horizon
