
document.addEventListener('DOMContentLoaded', function() {
    const addStudentButton = document.querySelector('.add_button');
    const minusStudentButton = document.querySelector('.minus-icon');
    const studentContainer = document.querySelector('.add_input');
    const otherAttachmentsCheckbox = document.getElementById('other_attachments');
    const zipFileInput = document.getElementById('zip_file');
        var x=2;
        const number=[,,2];
        const max=Math.max.apply(null,number);
    // const maxss=Math.max(...number);
    //     const ma=number.reduce((max,current)=>Math.max(max,current),number[0]);
    addStudentButton.addEventListener('click', function() {
        const newStudentFields = document.createElement('div');
        newStudentFields.className = 'row';
        newStudentFields.innerHTML = `
                                                      <div class="     box_team  "   >
              <div id="teamMembers">
                      <h4>أعضاء الفريق | Team Members</h4>
                      <div class="team-member">
                          <input type="text" placeholder="الرقم الأكاديمي | Academic ID" required>
                          <input type="text" placeholder="اسم الطالب | Student Name" required>
                          <input type="text" placeholder="الكلية| College " required>
                          <input type="text" placeholder="رقم الهاتف | Number Phone" required>
                          <input type="text" placeholder="رقم الهوية | ID Number" required>
                      </div>
                    
                  </div>
 
                                                        </div>
 

        `;
        

        const newAddStudentButton = document.createElement('div');
        newAddStudentButton.className = 'add-student';
        newAddStudentButton.innerHTML = number[x++];

        `
         
             
         `;
        const newStudentContainer = document.createElement('div');
        newStudentContainer.className = 'add_input';
        newStudentContainer.appendChild(newStudentFields);
        newStudentContainer.appendChild(newAddStudentButton);

        studentContainer.parentNode.insertBefore(newStudentContainer, studentContainer.nextSibling);

        // Show the minus icon in the main container if there are more than one containers
        if (document.querySelectorAll('.add_input').length > 1) {
            minusStudentButton.style.display = 'inline';
            number.push(x);
        }
    });

    minusStudentButton.addEventListener('click', function() {
        const studentContainers = document.querySelectorAll('.add_input');
        if (studentContainers.length > 1) {
            studentContainers[studentContainers.length - 1].remove();
             

        }
        // Hide the minus icon in the main container if there is only one container left
        if (document.querySelectorAll('.add_input').length === 1) {
            minusStudentButton.style.display = 'none';
            x=2;
            number=[2];
            number.remove(max);

        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const otherAttachmentsCheckbox = document.getElementById('other_attachments');
    const zipFileInput = document.getElementById('zip_file');






    otherAttachmentsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            zipFileInput.style.display = 'inline';
        } else {
            zipFileInput.style.display = 'none';
        }
    });



});







// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have a way to store the data from the previous pages (e.g., localStorage, sessionStorage, or a server-side database)
    // For simplicity, let's assume the data is stored in localStorage

    // Step 1: University Information
    document.getElementById('university').textContent = localStorage.getItem('university') || 'Not provided';
    document.getElementById('academic-degree').textContent = localStorage.getItem('academic-degree') || 'Not provided';
    document.getElementById('project-name').textContent = localStorage.getItem('project-name') || 'Not provided';
    document.getElementById('graduation-year').textContent = localStorage.getItem('graduation-year') || 'Not provided';

    // Step 2: Supervisor Information
    document.getElementById('supervisor-full-name').textContent = localStorage.getItem('supervisor-full-name') || 'Not provided';
    document.getElementById('supervisor-phone-number').textContent = localStorage.getItem('supervisor-phone-number') || 'Not provided';
    document.getElementById('academic-degree-2').textContent = localStorage.getItem('academic-degree-2') || 'Not provided';
    document.getElementById('project-description').textContent = localStorage.getItem('project-description') || 'Not provided';
    document.getElementById('logo').textContent = localStorage.getItem('logo') || 'Not provided';

    // Step 3: Student Information
    document.getElementById('student-number').textContent = localStorage.getItem('student-number') || 'Not provided';
    document.getElementById('student-name').textContent = localStorage.getItem('student-name') || 'Not provided';
    document.getElementById('id-number').textContent = localStorage.getItem('id-number') || 'Not provided';
    document.getElementById('phone-number').textContent = localStorage.getItem('phone-number') || 'Not provided';
    document.getElementById('college').textContent = localStorage.getItem('college') || 'Not provided';
    document.getElementById('university-major').textContent = localStorage.getItem('university-major') || 'Not provided';
    document.getElementById('department-head').textContent = localStorage.getItem('department-head') || 'Not provided';
});



document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('interfaceInput').addEventListener('input', function() {

    document.getElementById('interfaceForm').addEventListener('submit', function(event) {


        event.preventDefault();
        const inputValue = document.getElementById('interfaceInput').value;
        const interfaceDetails = document.getElementById('selectedInterfaceDetails');
        const interfaceName = document.getElementById('interfaceName');
        const interfaceDescription = document.getElementById('interfaceDescription');

        if (inputValue === 'إضافة مشروع') {
            interfaceName.innerText = 'اسم الواجهة: إضافة مشروع';
            interfaceDescription.innerText = 'هذه هي واجهة إضافة مشروع.';
            interfaceDetails.style.display = 'block';
            window.location.href = "file:///C:/Users/Abdulaziz/Desktop/Abdaluziz_v1/team.html";
        } else if (inputValue === 'تأكيد المشروع') {
            interfaceName.innerText = 'اسم الواجهة: تأكيد المشروع';
            interfaceDescription.innerText = 'هذه هي واجهة تأكيد المشروع.';
            interfaceDetails.style.display = 'block';
            window.location.href = "file:///C:/Users/Abdulaziz/Desktop/Abdaluziz_v1/sure.html";
        } else if (inputValue === 'إكمال عملية') {
            interfaceName.innerText = 'اسم الواجهة: إكمال عملية';
            interfaceDescription.innerText = 'هذه هي واجهة إكمال عملية.';
            interfaceDetails.style.display = 'block';
            window.location.href = "file:///C:/Users/Abdulaziz/Desktop/Abdaluziz_v1/complet.html";
        } else {
            interfaceDetails.style.display = 'none';
        }
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('submitButton').addEventListener('click', function() {
//         const selectedInterface = document.getElementById('interfaceInput').value;
//         const interfaceDetails = document.getElementById('selectedInterfaceDetails');
//         const interfaceName = document.getElementById('interfaceName');
//         const interfaceDescription = document.getElementById('interfaceDescription');

//         if (selectedInterface === 'اضافة مشروع') {
//             alert('مرحبأ 1');
//             window.location.href = "file:///C:/Users/Abdulaziz/Desktop/Abdaluziz_v1/team.html"; // تأكد من أن المسار صحيح
//             interfaceName.innerText = 'اسم الواجهة: اضافة مشروع';
//             interfaceDescription.innerText = 'هذه هي واجهة اضافة مشروع. يمكنك إضافة المزيد من التفاصيل هنا.';
//             interfaceDetails.style.display = 'block';
//         } else if (selectedInterface === 'تأكيد مشروع') {
//             alert('مرحبأ 2');
//             window.location.href = "file:///C:/Users/Abdulaziz/Desktop/Abdaluziz_v1/sure.html"; // تأكد من أن المسار صحيح
//             interfaceName.innerText = 'اسم الواجهة: تأكيد مشروع';
//             interfaceDescription.innerText = 'هذه هي واجهة تأكيد مشروع. يمكنك إضافة المزيد من التفاصيل هنا.';
//             interfaceDetails.style.display = 'block';
//         } else if (selectedInterface === 'إكمال عمليه') {
//             alert('مرحبأ 3');
//             window.location.href = "file:///C:/Users/Abdulaziz/Desktop/Abdaluziz_v1/complet.html"; // تأكد من أن المسار صحيح
//             interfaceName.innerText = 'اسم الواجهة: إكمال عمليه';
//             interfaceDescription.innerText = 'هذه هي واجهة إكمال عمليه. يمكنك إضافة المزيد من التفاصيل هنا.';
//             interfaceDetails.style.display = 'block';
//         } else {
//             interfaceDetails.style.display = 'none';
//             alert('يرجى اختيار واجهة صحيحة.');
//         }
//     });
// });





const projects_list = {
    "12345": "مشروع تطوير تطبيق الجوال",
    "67890": "مشروع تحليل البيانات",
    "54321": "مشروع الذكاء الاصطناعي"
};

function checkProject() {
    const projectNumber = document.getElementById('id_projects').value;
    const projectName = projects_list[projectNumber];

    if (projectName) {
        document.getElementById('projectName').innerText = `اسم المشروع: ${projectName}`;
        document.getElementById('s').style.display = 'block';
    }
     else {
        alert('رقم المشروع غير موجود. الرجاء إدخال رقم مشروع صحيح.');
        // alert('لايوجد مشروع يطابق الرقم  ');
        document.getElementById('s').style.display = 'none';
    }
}

function confirmProject() {
    alert('شكرًا لك على تأكيد مشاركتك في المشروع! ');
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('id_project').addEventListener('input', function() {
        const projectNumber = this.value;
        const projectName = projects_list[projectNumber];

        if (projectName) {
            document.getElementById('projectDetails').style.display = 'block'; // إظهار التفاصيل
            document.getElementById('projectDetails').innerText = ` ${projectName}`;  

        
        }
        else if(projectNumber.trim() === ''){
          document.getElementById('projectDetails').innerText = ' رقم المشروع فارغ  '; // إخفاء التفاصيل
          document.getElementById('projectDetails').style.display = 'block'; // إخفاء div التفاصيل
        
        }
        else {
            document.getElementById('projectDetails').innerText = 'لايوجد مشروع يطابق الرقم  '; // إخفاء التفاصيل
            document.getElementById('projectDetails').style.display = 'block'; // إخفاء div التفاصيل
        
        }
    });
});








// State management
let currentUser = null;
let projects = [];

// UI Functions
function showLoginForm(type) {
    document.getElementById('main').classList.remove('active');
    document.getElementById('selected').classList.add('active');
     document.getElementById('home').classList.add('hidden');
     document.getElementById('ender_home').classList.add('hidden');
     document.getElementById('adminLogin').classList.add('hidden');
    document.getElementById('studentDashboard').classList.add('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');

    
    // document.getElementById(`studentDashboard`).classList.remove('hidden');
    if(type ==='admin'){
        document.getElementById(`${type}Login`).classList.remove('hidden');

    }
    else{
        document.getElementById(`${type}Dashboard`).classList.remove('hidden');

    }


}

function handleLogin(type, event) {
    event.preventDefault();
    
    // Simulate authentication
    currentUser = {
        type: type,
        id: type === 'student' ? 'STD123' : 'ADM456'
    };
    
    showDashboard(type);
}

function showDashboard(type) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('ender_home').classList.add('hidden');
    document.getElementById('adminLogin').classList.add('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('studentDashboard').classList.add('hidden');
    //  document.getElementById('adminLogin').classList.add('hidden');
    
    if (type === 'student') {
        document.getElementById('studentDashboard').classList.remove('hidden');
        updateProjectStatus();
    
    } else {
        document.getElementById('adminDashboard').classList.remove('hidden');
        updatePendingProjects();
        }
}

function handleProjectSubmit(event) {
    event.preventDefault();
    const form = event.target;
    
    // Simulate project submission
    const project = {
        id: `PRJ${projects.length + 1}`,
        title: form.querySelector('input[type="text"]').value,
        description: form.querySelector('textarea').value,
        status: 'pending',
        studentId: currentUser.id,
        feedback: ''
    };
    
    projects.push(project);
    form.reset();
    updateProjectStatus();
    alert('تم رفع المشروع بنجاح');
}

function updateProjectStatus() {
    if (!currentUser || currentUser.type !== 'student') return;
    
    const statusContent = document.getElementById('projectStatusContent');
    const userProjects = projects.filter(p => p.studentId === currentUser.id);
    
    if (userProjects.length === 0) {
        statusContent.innerHTML = '<p>لم يتم رفع أي مشروع بعد</p>';
        return;
    }
    
    statusContent.innerHTML = userProjects.map(project => `
        <div class="project-card">
            <h4>${project.title}</h4>
            <p>الحالة: <span class="status-${project.status}">${getStatusText(project.status)}</span></p>
            ${project.feedback ? `<p>الملاحظات: ${project.feedback}</p>` : ''}
        </div>
    `).join('');
}

function updatePendingProjects() {
    if (!currentUser || currentUser.type !== 'admin') return;
    
    const pendingProjectsDiv = document.getElementById('pendingProjects');
    const pendingProjects = projects.filter(p => p.status === 'pending');
    
    if (pendingProjects.length === 0) {
        pendingProjectsDiv.innerHTML = '<p>لا توجد مشاريع قيد الانتظار</p>';
        return;
    }
    
    pendingProjectsDiv.innerHTML = pendingProjects.map(project => `
        <div class="project-card">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <button onclick="handleProjectDecision('${project.id}', 'approved')">قبول</button>
                <button onclick="showRejectForm('${project.id}')" style="background-color: #d32f2f;">رفض</button>
            </div>
        </div>
    `).join('');
}

function handleProjectDecision(projectId, decision, feedback = '') {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        project.status = decision;
        project.feedback = feedback;
        updatePendingProjects();
    }
}

function showRejectForm(projectId) {
    const feedback = prompt('الرجاء إدخال سبب الرفض:');
    if (feedback) {
        handleProjectDecision(projectId, 'rejected', feedback);
    }
}

function getStatusText(status) {
    const statusMap = {
        pending: 'قيد المراجعة',
        approved: 'تمت الموافقة',
        rejected: 'مرفوض'
    };
    return statusMap[status] || status;
}



