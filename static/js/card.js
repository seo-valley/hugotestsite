  // first name
  const $first_name = document.querySelector('#first_name');
  if ($first_name != null)
    var first_name = $first_name.dataset.first_name;

  // last name
  const $last_name = document.querySelector('#last_name');
  if ($last_name != null)
    var last_name = $last_name.dataset.last_name;
    
  // company name
  const $company_name = document.querySelector('#company_name');
  if ($company_name != null)
    var company_name = $company_name.dataset.company_name;

  // Contact No 1
  const $contact_no_1_text = document.querySelector('#contact_no_1');
  if ($contact_no_1_text != null)
    var contact_no_1_text = $contact_no_1_text.innerHTML;
  if ($contact_no_1_text != null)
    var contact_no = $contact_no_1_text.dataset.contact_no_1;
  // Contact No 3
  const $contact_no_2 = document.querySelector('#contact_no_2');
  if ($contact_no_2 != null)
    var contact_no_2_text = $contact_no_2.innerHTML;

  // Mail
  const $mail = document.querySelector('#mail');
  if ($mail != null)
    var mail = $mail.dataset.mail;

  // WebSite
  const $website = document.querySelector('#website');
  if ($website != null)
    var website = $website.dataset.website;

  // Address line 1
  const $address_line_1 = document.querySelector('#address_line_1');
  if ($address_line_1 != null)
    var address_line_1 = $address_line_1.dataset.address_line_1;

  // Addres line 2
  const $address_line_2 = document.querySelector('#address_line_2');
  if ($address_line_2 != null)
    var address_line_2 = $address_line_2.dataset.address_line_2;

  // city
  const $city = document.querySelector('#city');
  if ($city != null)
    var city = $city.dataset.city;

  // state
  const $state = document.querySelector('#state');
  if ($state != null)
    var state = $state.dataset.state;

  // Country
  const $country = document.querySelector('#country');
  if ($country != null)
    var country = $country.dataset.country;

  // zip_code
  const $zip_code = document.querySelector('#zip_code');
  if ($zip_code != null)
    var zip_code = $zip_code.dataset.zip_code;

  var message_string = "";

  message_string = message_string + window.location.href;

  message_string = message_string + "%0a%0a" + "Name%20:%20" + first_name + "%20" + last_name;

  if (company_name != "") {
    if (typeof company_name !== 'undefined') {
      message_string = message_string + "%0a%0a" + "Company%20:%20" + company_name;
    }
  }
  if (contact_no_1_text != "") {
    if (typeof contact_no_1_text !== 'undefined') {
      message_string = message_string + "%0a%0a" + encodeURIComponent("Phone #1") + "%20:%20" + encodeURIComponent(contact_no_1_text);
    }
    if (typeof contact_no_2_text !== 'undefined') {
      message_string = message_string + "%0a%0a" + encodeURIComponent("Phone #2") + "%20:%20" + encodeURIComponent(contact_no_2_text);
    }
    message_string = message_string + "%0a%0a" + "WhatsApp%20:%20" + encodeURIComponent("https://wa.me/") + encodeURIComponent(contact_no);
  }
  if (mail != "") {
    if (typeof mail !== 'undefined') {
      message_string = message_string + "%0a%0a" + "Email%20:%20" + mail;
    }
  }
  if (website != "") {
    if (typeof website !== 'undefined') {
      message_string = message_string + "%0a%0a" + "Website%20:%20" + website;
    }
  }
  if (address_line_1 != "") {
    if (typeof address_line_1 !== 'undefined') {
      message_string = message_string + "%0a%0a" + "Address%20:%20%0a" + address_line_1;
    }
  }
  if (address_line_2 != "") {
    if (typeof address_line_2 !== 'undefined') {
      message_string = message_string + "%0a" + address_line_2;
    }
  }
  if (city != "") {
    if (typeof city !== 'undefined') {
      message_string = message_string + "%20" + city;
    }
  }

  if (zip_code != "") {
    if (typeof zip_code !== 'undefined') {
      message_string = message_string + "(" + zip_code + "),";
    }
  }

  if (state != "") {
    if (typeof state !== 'undefined') {
      message_string = message_string + "%20" + state;
    }
  }

  if (country != "") {
    if (typeof country !== 'undefined') {
      message_string = message_string + "%20" + country;
    }
  }

/* Open Share Model */
const title = document.title;
var sharemodel = document.querySelector(".social-share");
sharemodel.addEventListener('click',event => {
 opensharemodel();
});
function opensharemodel(){
  if (navigator.share) {
    navigator.share({
      text: decodeURIComponent(message_string),
     
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
var directwhatsapp = document.querySelector(".social-whatsapp-share");
directwhatsapp.addEventListener('click',function(event){
  DirectWhatsappfunction(this,event)
});
function DirectWhatsappfunction(element,event){
  element.href = 'https://api.whatsapp.com/send?text=' + message_string;
}


const whatsapp_button = document.querySelector(".whatsapp-button");
if(whatsapp_button){
  whatsapp_button.addEventListener('click', function (event) {
    handleWhatsappShare(this, event);
  });

}

function handleWhatsappShare(element, event) {
  
  try {
    
    const mobile_no = document.getElementById('whatsapp-input').value;
    const country_code = document.getElementById('whatsapp-country-code').value;
    if ((mobile_no == "") || (country_code == "")) {
      return false;
    }
  
      console.log(message_string);
      element.href = 'https://api.whatsapp.com/send?phone=+' + country_code + mobile_no + '&text=' + message_string;
  }
  catch (error) {
    console.log(error);
  }
   
  

}


/* External link blank */
function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
};
externalLinks();


function no_follow() {
  const $no_follow_link = document.querySelector('body');
  if ($no_follow_link != null) {
    var no_follow_link = $no_follow_link.dataset.no_follow_link;

  }

  if (no_follow_link == "true") {
    var all_links = document.getElementsByTagName("a");
    for (i = 0; i < all_links.length; i++) {
      all_links[i].rel = 'nofollow';
    }

    console.log("true")
  }

}

no_follow();


function Expire() {
  // Get the current date and time 
  var rightNow = new Date();
  // Setup End Date 
  var rightNow = new Date();
  const $creation_date = document.querySelector('#creation_date');
  if ($creation_date != null)
    var creation_date = new Date($creation_date.dataset.creation_date);
  const $expiry_date = document.querySelector('#expiry_date');
  if ($expiry_date != null)
    var expiry_date = new Date($expiry_date.dataset.expiry_date);

  console.log(creation_date);
  console.log(expiry_date);
  var fifteenDays = new Date(expiry_date);
  fifteenDays.setDate(fifteenDays.getDate() - 15);

  if (rightNow < creation_date || rightNow > expiry_date) {
    console.log("I hope you enjoyed using this document.\n\nThe evaluation period has ended.");
  }
  else if (fifteenDays < rightNow) {
    console.log("Importan Notice, This evaluation period will expire on " + expiry_date + ", you better let me know before it expires");
  }
}

// execute check expiration code 
Expire();