import './Filter.css'

export default function Filter({ setFilter, setPersonsFiltered, persons }) {
  const handleFilter = (e) => {
    e.preventDefault()
    const arr = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setPersonsFiltered(arr)
    setFilter(e.target.value)
  }
  return (
    <div className='filter'>
      <p>Filter shown with a </p>
      <input onChange={handleFilter} />
    </div>
  )
}
