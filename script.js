$(document).ready(function() {
    // Skills
    const skills = [
        "Machine Learning","DDL", "Transformers", "VLM", "Generative AI", "LLMs", "PEFT", "Diffusion Models",
        "C++", "Qt", "Python", "Keras", "PyTorch", "TensorFlow",
        "Computer Vision", "Cloud Computing", "IoT", "AWS"
    ];
    skills.forEach(skill => {
        $("#skill-list").append(`<li class="skill-item">${skill}</li>`);
    });

    // Experience Timeline
    const experiences = [
        {
            title: "PhD Student in Generative Multimodal Artificial Intelligence",
            company: "IKERLAN",
            period: "October 2023 - Present",
            description: "Research focused on LLM, PEFT, diffusion models, and llama."
        },
        {
            title: "Researcher",
            company: "IKERLAN",
            period: "March 2022 - Present",
            description: "Cloud computing, IoT, Full Stack, AWS, Computer vision, Machine Learning (Transformers)"
        },
        {
            title: "Researcher",
            company: "LORTEK",
            period: "June 2021 - February 2022",
            description: "Custom Keras and Pytorch models, Python, C++, Random Forest, XGBoost, KNN, GANs, Autoencoders, Yolo, Segmentation, TimeSeries"
        },
        {
            title: "Developer",
            company: "Macarbox",
            period: "September 2020 - March 2021",
            description: "Industrialization, industrial digital printing system, C++, Qt, SQL, OpenCV, Threads"
        }
    ];
    experiences.forEach((exp, index) => {
        $("#experience-timeline").append(`
            <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p class="period">${exp.period}</p>
                    <p>${exp.description}</p>
                </div>
            </div>
        `);
    });

    // Project Gallery
    const projects = [
        {
            title: "Generative AI Research",
            description: "Ongoing PhD research on generative multimodal AI, focusing on LLMs and diffusion models."
        },
        {
            title: "Cloud-based IoT Solution",
            description: "Developed a scalable IoT solution using AWS technologies for industrial applications."
        },
        {
            title: "Computer Vision System",
            description: "Implemented an advanced computer vision system for real-time object detection and segmentation."
        }
    ];
    projects.forEach(project => {
        $("#project-gallery").append(`
            <div class="project-item">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
        `);
    });

    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    // Form submission
    $("#contact-form").submit(function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a PHP script
        console.log("Form submitted");
        alert("Thank you for your message. I'll get back to you soon!");
        this.reset();
    });

    // Add active class to menu items on scroll
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 200) {
                $('.menu ul li a.active').removeClass('active');
                $('.menu ul li a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Animated skill bars
    $('.skill-item').each(function() {
        $(this).animate({
            width: $(this).data('percentage') + '%'
        }, 1000);
    });

    // Fade in elements on scroll
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity':'1'}, 1000);
            }
        });
    });

    // Toggle mobile menu
    $('.mobile-menu-toggle').click(function() {
        $('.menu').toggleClass('active');
    });

 // Courses section
 const courses = [
    {
        title: "Generative AI Course",
        videos: [
            {
                title: "BackPropagation Explicada",
                youtubeId: "zsU4QjCqNko"  // Replace with actual YouTube video ID
            },
            {
                title: "LLM desde Cero",
                youtubeId: "pxeUaeUh7xI"  // Replace with actual YouTube video ID
            }
        ]
    }
];



courses.forEach(course => {
    const courseElement = $(`
        <div class="course">
            <h3>${course.title}</h3>
            <div class="video-scroll"></div>
        </div>
    `);
    course.videos.forEach(video => {
        courseElement.find('.video-scroll').append(`
            <div class="video-item" data-youtube-id="${video.youtubeId}">
                <img src="https://img.youtube.com/vi/${video.youtubeId}/0.jpg" alt="${video.title}">
                <p>${video.title}</p>
            </div>
        `);
    });
    $('.course-container').append(courseElement);
});

// Add click event to video items
$('.video-item').click(function() {
    const youtubeId = $(this).data('youtube-id');
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
});

    // Desktop Apps section
    const desktopApps = [
        {
            title: "Mejora o dale vida a tus fotos antiguas",
            youtubeId: "-nHAR-C9B-c"
        },
        {
            title: "Borra cualquier cosa localmente",
            youtubeId: "DZkPgGq_vWc"
        }
        // Add more desktop apps as needed
    ];

    desktopApps.forEach(app => {
        $('#desktop-apps .app-container').append(`
            <div class="app-item" data-youtube-id="${app.youtubeId}">
                <img src="https://img.youtube.com/vi/${app.youtubeId}/0.jpg" alt="${app.title}">
                <p>${app.title}</p>
            </div>
        `);
    });

    // Mobile Apps section
    const mobileApps = [
        {
            title: "Aleraser - Borrar objetos de fotos",
            youtubeId: "5cxCMLI0GEo"
        },
        // Add more mobile apps as needed
    ];

    mobileApps.forEach(app => {
        $('#mobile-apps .app-container').append(`
            <div class="app-item" data-youtube-id="${app.youtubeId}">
                <img src="https://img.youtube.com/vi/${app.youtubeId}/0.jpg" alt="${app.title}">
                <p>${app.title}</p>
            </div>
        `);
    });

    // Add click event to app items (both desktop and mobile)
    $('.app-item').click(function() {
        const youtubeId = $(this).data('youtube-id');
        window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
    });

    // Add hover effect to app items
    $('.app-item').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
            $(this).css('cursor', 'pointer');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

// Horizontal scrolling for courses
$('.course-container').css('overflow-x', 'auto').css('white-space', 'nowrap');
$('.course').css('display', 'inline-block').css('vertical-align', 'top').css('margin-right', '20px');

// Vertical scrolling for videos within each course
$('.video-scroll').css('max-height', '400px').css('overflow-y', 'auto');

});
