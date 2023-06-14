import { useState, useEffect } from 'react';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);
  // const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch('https://summer-camp-learning-school-server-evo264714.vercel.app/classes');
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error('Failed to fetch classes', error);
    }
  };

  const handleApprove = async (classId) => {
    try {
      // setIsUpdatingStatus(true);
      await updateClassStatus(classId, 'approved');
      fetchClasses();
    } catch (error) {
      console.error('Failed to update class status', error);
    } finally {
      // setIsUpdatingStatus(false);
    }
  };

  const handleDeny = async (classId) => {
    try {
      // setIsUpdatingStatus(true);
      await updateClassStatus(classId, 'denied');
      fetchClasses();
    } catch (error) {
      console.error('Failed to update class status', error);
    } finally {
      // setIsUpdatingStatus(false);
    }
  };

  const updateClassStatus = async (classId, status) => {
    try {
      await fetch(`https://summer-camp-learning-school-server-evo264714.vercel.app/classes/${classId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
    } catch (error) {
      console.error('Failed to update class status', error);
      throw error;
    }
  };

  const openModal = (cls) => {
    setSelectedClass(cls);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFeedback('');
  };

  const handleSendFeedback = async () => {
    try {
      if (!selectedClass) return;

      await updateClassFeedback(selectedClass._id, feedback);
      fetchClasses();
      closeModal();
    } catch (error) {
      console.error('Failed to send feedback', error);
    }
  };

  const updateClassFeedback = async (classId, feedback) => {
    try {
      await fetch(`https://summer-camp-learning-school-server-evo264714.vercel.app/classes/${classId}/feedback`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });
    } catch (error) {
      console.error('Failed to update class feedback', error);
      throw error;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Manage Classes</h1>
      <table className="w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Class Name</th>
            <th className="py-2 px-4 border-b">Instructor Name</th>
            <th className="py-2 px-4 border-b">Available Seats</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
  {classes.map((cls) => (
    <tr key={cls._id}>
      <td className="py-2 px-4 border-b">{cls.name}</td>
      <td className="py-2 px-4 border-b">{cls.instructorName}</td>
      <td className="py-2 px-4 border-b">{cls.availableSeats}</td>
      <td className="py-2 px-4 border-b">{cls.price}</td>
      <td className="py-2 px-4 border-b">{cls.status}</td>
      <td className="py-2 px-4 border-b">
        <button
          onClick={() => handleApprove(cls._id)}
          disabled={cls.status === 'approved' || cls.status === 'denied'}
          className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 ${
            cls.status === 'approved' || cls.status === 'denied' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Approve
        </button>
        <button
          onClick={() => handleDeny(cls._id)}
          disabled={cls.status === 'approved' || cls.status === 'denied'}
          className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2 ${
            cls.status === 'approved' || cls.status === 'denied' ?  'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Deny
        </button>
        <button
          onClick={() => openModal(cls)}
          disabled={cls.status === 'approved' || cls.status === 'pending'}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${cls.status === 'approved' || cls.status === 'pending' ?  'opacity-50 cursor-not-allowed' : '' }`}
        >
          Send Feedback
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Send Feedback</h2>
            <textarea
              className="w-full h-24 border border-gray-300 rounded p-2 mb-4"
              placeholder="Enter your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleSendFeedback}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
