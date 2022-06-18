const loadContact = () => {
  const header = document.createElement('h1');
  header.textContent = 'Contact Us';

  const container = document.createElement('div');
  container.classList.add('contact-container');

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  contactInfo.innerHTML = '<div><strong>Call Us:</strong> (555) 555-5555</div>\
                           <div><strong>Email Us:</strong> info@fortwaynesushi.com</div>\
                           <div><strong>Visit Us:</strong> 1234 Main St, Fort Wayne, IN 46807</div>'
  container.appendChild(contactInfo);

  const contactForm = document.createElement('div');
  contactForm.innerHTML = '<form>\
    <label>Your Name</label>\
    <input type="text"></input>\
    <label>Your Email</label>\
    <input type="email"></input>\
    <label>Your Message</label>\
    <textarea rows="4"></textarea>\
    <button type="button">Send Message</button>\
  </form>';
  container.appendChild(contactForm);

  document.getElementById('content').append(header, container);
}

export default loadContact;
