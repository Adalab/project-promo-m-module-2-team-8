const detailsForm=document.querySelector(".details__form"),active=document.querySelector(".details-up"),containerShare=document.querySelector(".js-containerShare"),activeShare=document.querySelector(".share-up"),chooseC=document.querySelector(".colors_design"),choosec2=document.querySelector(".colors-up"),fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),form=document.querySelector(".js-form"),nameTarget=document.querySelector(".js-name"),job=document.querySelector(".js-job"),phone=document.querySelector(".js-telefono"),mail=document.querySelector(".js-mail"),linkedin=document.querySelector(".js-linkedin"),gitHub=document.querySelector(".js-git");function eventFill(){chooseC.classList.toggle("collapseShare"),choosec2.classList.toggle("arrowShare")}function eventFill2(){detailsForm.classList.toggle("collapseShare"),active.classList.toggle("arrowShare")}function eventFill3(){containerShare.classList.toggle("collapseShare"),activeShare.classList.toggle("arrowShare")}function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}choosec2.addEventListener("click",eventFill),active.addEventListener("click",eventFill2),activeShare.addEventListener("click",eventFill3),fileField.addEventListener("change",getImage);const borderColor=document.querySelector(".js-headerpreview"),textColor=document.querySelector(".js-name"),links2=document.querySelector(".js-footerpreview"),select1=document.querySelector(".js-CHeckColor1"),select2=document.querySelector(".js-CHeckColor2"),select3=document.querySelector(".js-CHeckColor3");let linkPallete=document.querySelectorAll(".js__link__pallete"),linkRadius=document.querySelectorAll(".js__link__radius");function selectColor(e){let t=e.target.value;if("2"===t){textColor.classList.add("h1-color2"),textColor.classList.remove("h1-color3"),borderColor.classList.add("border-preview2"),borderColor.classList.remove("border-preview3");for(const e of linkPallete)e.classList.add("links2"),e.classList.remove("links3");for(const e of linkRadius)e.classList.add("links2_1"),e.classList.remove("links3_1")}if("3"===t){textColor.classList.add("h1-color3"),borderColor.classList.add("border-preview3");for(const e of linkPallete)e.classList.add("links3");for(const e of linkRadius)e.classList.add("links3_1"),e.classList.remove("links2_1")}if("1"===t){textColor.classList.remove("h1-color3","h1-color2"),borderColor.classList.remove("border-preview3","border-preview2");for(const e of linkPallete)e.classList.remove("links3","links2");for(const e of linkRadius)e.classList.remove("links2_1")}}select1.addEventListener("click",selectColor),select2.addEventListener("click",selectColor),select3.addEventListener("click",selectColor);const data={name:"",job:"",img:"",phone:"",mail:"",linkedin:"",git:""};function handlerChangeForm(e){const t=e.target.name,o=e.target.value;"fullName"===t?(data.name=o,nameTarget.innerHTML=data.name):"workTitle"===t?data.job=o:"email"===t?data.mail=o:"phone"===t?data.phone=o:"linkedin"===t?data.linkedin=o:"github"===t&&(data.git=o)}function hadlerChangePreview(){nameTarget.innerHTML=data.name,job.innerHTML=data.job,phone.href=data.phone,mail.href=data.mail,linkedin.href="https://linkedin.com/in/${data.linkedin}",gitHub.href="https://github.com/${data.git}"}function handlerTotalChange(e){handlerChangeForm(e),hadlerChangePreview()}form.addEventListener("keyup",handlerTotalChange);