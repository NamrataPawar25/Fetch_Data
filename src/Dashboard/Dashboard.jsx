import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch data from API
  useEffect(() => {
    fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-3">
      <h2 className="mb-3">Project Dashboard</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Details</th>
            <th>Department</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((p, i) => (
              <tr key={p.id}>
                <td>{startIndex + i + 1}</td>
                <td>{p.ProjectName}</td>
                <td>{p.Details}</td>
                <td>{p.Department}</td>
                <td>{new Date(p.startDate * 1000).toLocaleDateString()}</td>
                <td>{new Date(p.EndDate * 1000).toLocaleDateString()}</td>
                <td>{p.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No project available</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Button variant="primary" onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button variant="primary" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
