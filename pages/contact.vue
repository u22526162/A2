<!--Amadeus Fidos u22526162-->
<template>
    <div class="c-page">
      <h1 class="c-header">Contact Me</h1>
      <p>Fill out the form to contact me</p>
  
      <form name="contact" method="POST" data-netlify="true" @submit.prevent="handleSubmit">  
        <div class="form-group">
          <label for="name">
            Name:
          </label>
          <input type="text" id="name" name="name" required>
        </div>
  
        <div class="form-group">
          <label for="email">
            Email:
          </label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
        <label for="message">
          Message: </label>
          <textarea id="message" name="message" rows="7" required></textarea>
        </div>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const handleSubmit = async (e) => {
    const form = e.target
    const formData = new FormData(form)
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
      alert("Your message has been sent. Thank you for reaching out!")
      form.reset()
    } catch (error) {
      alert("There was an error. Please try again later.")
    }
  }
  </script>
  
  <style scoped>
  .c-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .c-header {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .c-page p {
    text-align: center;
    margin-bottom: 30px;
    color: #555;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 4px;
  }
  .form-group textarea {
    resize: vertical;
  }
  
  button {
    background: #4a6fa5;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
  }
  button:hover {
    background: #3a5a8f;
  }
  </style>