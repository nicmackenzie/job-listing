import React, {useState} from 'react';

function AddJobForm({onAddJob}) {
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        role: "",
        level: "",
        contract: "",
        location: "",
        languages: [],
        tools: [],
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
    // Make a POST request to the server with formData
    fetch('http://localhost:8001/jobs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
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
            languages: [],
            tools: [],
          });
        })
        .catch((error) => {
          console.error('Error adding job:', error);
        });
    };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="company">Company:</label>
    <input
      type="text"
      id="company"
      name="company"
      value={formData.company}
      onChange={handleChange}
      required
    />

    <label htmlFor="position">Position:</label>
    <input
      type="text"
      id="position"
      name="position"
      value={formData.position}
      onChange={handleChange}
      required
      />

    <label htmlFor="role">Role:</label>
    <input
      type="text"
      id="role"
      name="role"
      value={formData.role}
      onChange={handleChange}
      required
      />

    <label htmlFor="level">Level:</label>
    <input
      type="text"
      id="level"
      name="level"
      value={formData.level}
      onChange={handleChange}
      required
      />

    <label htmlFor="contract">Contract:</label>
    <input
      type="text"
      id="contract"
      name="contract"
      value={formData.contract}
      onChange={handleChange}
      required
      />

    <label htmlFor="location">Location:</label>
    <input
      type="text"
      id="location"
      name="location"
      value={formData.location}
      onChange={handleChange}
      required
      />

    <label htmlFor="languages">Languages:</label>
    <select
      id="languages"
      name="languages"
      multiple
      value={jobData.languages}
      onChange={handleChange}
      required
      >
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
        <option value="Sass">Sass</option>
      </select>

    <label htmlFor="tools">Tools:</label>
    <select
      id="tools"
      name="tools"
      multiple
      value={jobData.tools}
      onChange={handleChange}
     required
      >
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Sass">Sass</option>
      </select>

      <button type="submit">Add Job</button>
    </form>
  );
};

export default AddJobForm;
 