import React, { useState, useEffect } from 'react'
import "../styles/UserList.css"

export default function UserList() {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUsers(data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    };

    fetchData()
  }, [])

  useEffect(() => {
    if (users) {
      const results = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(results)
    }
  }, [searchTerm, users])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!users) {
    return <div>No users match that search</div>
  }

  return (
    <>
    <div className="user-list">
        <h1>User List</h1>
        <input
          type="text"
          placeholder="Filter by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li key={user.id}>
                {user.name}<br />
                {user.email}<br />
                {user.company.name}
              </li>
            ))
          ) : (
            <li>No users match that search.</li>
          )}
        </ul>
      </div>
    </>
  );
}