import React, {useState} from 'react';

function AddJobForm({ onAddJob }) {
    const [formData, setFormData] = useState({
      company: '',
      position: '',
      role: '',
      level: '',
      contract: '',
      location: '',
      languages: '',
      tools: '',
   });

function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
     }));
};

function handleSubmit(e) {
    e.preventDefault();

    const job = {
      ...formData,
      logo: './images/loop-studios.svg',
      new: true,
      featured: false,
      postedAt: 'A few minutes ago',
      languages: formData.languages.split(','),
      tools: formData.tools.split(','),
      likedBy: [],
    };

    // Make a POST request to the server with formData
    fetch('http://localhost:8001/jobs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(job),
    })
      .then((response) => response.json())
      .then((data) => {
         // Call the onAddJob callback to add the new job to the jobs array
         onAddJob(data);
         setFormData({
          company: '',
          position: '',
          role: '',
          level: '',
          contract: '',
          location: '',
          languages: '',
          tools: '',
          });
        })
        .catch(error => {
          console.error('Error adding job:', error);
        });
    }

  return (
    <form
    onSubmit= {handleSubmit}
    className="bg-white max-w-lg mx-auto w-full p-4 shadow-sm rounded-sm mt-12"
  >
     <div className="form-control">
        <label htmlFor="company" className="form-label">
          Company:
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="position" className="form-label">
          Position:
        </label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-control">
        <label htmlFor="role" className="form-label">
          Role:
        </label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-control">
        <label htmlFor="level" className="form-label">
          Level:
        </label>
        <input
          type="text"
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
          className="form-input"
        />
     </div>
      <div className="form-control">
        <label htmlFor="contract" className="form-label">
          Contract:
        </label>
        <input
          type="text"
          id="contract"
          name="contract"
          value={formData.contract}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-control">
        <label htmlFor="location" className="form-label">
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-control">
        <label htmlFor="languages" className="form-label">
          Languages:
        </label>
        <input
          type="text"
          id="languages"
          name="languages"
          value={formData.languages}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="separate language with commas eg HTML,CSS,JS"
        />
         </div>
      <div className="form-control">
        <label htmlFor="tools" className="form-label">
          Tools:
        </label>
        <input
          type="text"
          id="tools"
          name="tools"
          value={formData.tools}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="separate tools with commas eg React,Tailwind,Mui"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Job
      </button>
    </form>
  );
}

export default AddJobForm;