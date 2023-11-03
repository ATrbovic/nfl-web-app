<!-- this is a test -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('src/components/head.php'); ?>
    <link rel="stylesheet" href="src/assets/css/views/about.css">
    <link rel="stylesheet" href="src/plugins/slick/slick.css">
    <link rel="stylesheet" href="src/plugins/slick/slick-theme.css">
    <meta name="description" content="Learn about FSU College of Engineering.">
    <title>About Us</title>
</head>

<body>
    <?php include('src/components/nav.php'); ?>
    <section id="hero">
        <div class="container">
            <h1>FSU NFL Data Bowl Team</h1>
            <p>Creating innovative and interesting NFL analytics!</p>
        </div>
    </section>
    <!-- Organizations -->
    <section id="organizations">
        <div class="container">
            <ul>
                <li>
                    <a href="https://www.famu.edu">
                        <img src="https://th.bing.com/th/id/R.a98998d44ab2c09022605b2c873aa2c9?rik=DYBZVZ5lG5gjwQ&pid=ImgRaw&r=0" alt="Organization 1" />
                    </a>
                </li>
                <li>
                    <a href="https://www.fsu.edu">
                        <img src="https://sportsandthemind.com/wp-content/uploads/2015/04/1024px-FSU_seal.svg_.png" alt="Organization 2" />
                    </a>
                </li>
                <li>
                    <a href="https://www.nsf.gov">
                        <img src="https://th.bing.com/th/id/R.15a75ffa0f1719d37b8a63f6e39b060a?rik=1Qr8unE40YNFRw&riu=http%3a%2f%2fseidenbergnews.blogs.pace.edu%2ffiles%2f2015%2f07%2fnsf-logo.png&ehk=VdFCIgVysW%2fWcJVKz1DE518%2fCPPYtH15VHtRS6Kjo%2b0%3d&risl=&pid=ImgRaw&r=0" />
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <!-- About -->
    <section id="about">
        <div class="container">
            <h2>About Us</h2>
            <p>Our diverse team is comprised of undergraduates and a high school student, each of us brining our unique backgrounds and experiences to the team. With backgrounds in computer science, statistics, and industrial engineering, we combine out love of technology to bring Innovative and refreshing insights into football data analysis. Under the guidance of Dr. Lichun Li we aim to bring new solutions to the filed of sports data analytics. Special thanks to the National Science Foundation for funding this research.</p>
        </div>
    </section>
    <!-- Team -->
    <section id="team">
        <div class="container">
            <header>
                <h2>Our Team</h2>
                <p>We have background, track record and a vision to create!</p>
            </header>
            <ul>
                <li>
                    <img src="https://media.licdn.com/dms/image/D4E03AQEeURxhjj7u6Q/profile-displayphoto-shrink_800_800/0/1696381486760?e=1701907200&v=beta&t=b3sDKh6AbcJ0NCsrCkUOrDJIgh2slgXS4NscPEs5OKQ" alt="Team Member 1">
                    <h3>Andrew Young</h3>
                    <p>Guest Programmer</p>
                    <a href="https://www.linkedin.com/in/andrewchristianyoung/"><i class="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                    <img src="https://th.bing.com/th/id/OIP.fvwpZ_XNHymHjnEnN9jNGQAAAA?pid=ImgDet&rs=1" alt="Team Member 2">
                    <h3>Alex Trbovic</h3>
                    <p>Programmer</p>
                    <a href="https://www.linkedin.com/in/alextrbovic/"><i class="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                    <img src="https://media.licdn.com/dms/image/D4D03AQEWyBpHoaUBgw/profile-displayphoto-shrink_200_200/0/1674667542716?e=1701907200&v=beta&t=GIHIkF1KHtwRtXsAGeCTzBvOOmD2uIGbtkbXWJg3LZc" alt="Team Member 3">
                    <h3>Lichun Li</h3>
                    <p>Assistant Professor</p>
                    <a href="https://www.linkedin.com/in/lichun-li-653776263/"><i class="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                    <img src="https://th.bing.com/th/id/OIP.fvwpZ_XNHymHjnEnN9jNGQAAAA?pid=ImgDet&rs=1" alt="Team Member 4">
                    <h3>Souhail Marnaoui</h3>
                    <p>Programmer</p>
                    <a href="https://www.linkedin.com/in/souhail-marnaoui/"><i class="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                    <img src="https://media.licdn.com/dms/image/D4E03AQFS16AJxUP91A/profile-displayphoto-shrink_200_200/0/1675198972216?e=1701907200&v=beta&t=mCig0hRF90K_vYuD3Sdp5kwOo-1sRIwLAe-VYSRWSUI" alt="Team Member 5">
                    <h3>Nicolas Herbst</h3>
                    <p>Programmer</p>
                    <a href="https://www.linkedin.com/in/nicholas-herbst-/"><i class="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                    <img src="https://th.bing.com/th/id/OIP.fvwpZ_XNHymHjnEnN9jNGQAAAA?pid=ImgDet&rs=1" alt="Team Member 7">
                    <h3>Jose Diaz</h3>
                    <p>Researcher</p>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </li>
            </ul>
        </div>
    </section>
    <!-- Testimonials -->
    <section id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Testimonial Slider -->
                    <ul class="testimonial-slider owl-carousel owl-theme">
                        <!-- Testimonial -->
                        <li class="item">
                            <!-- Speech -->
                            <p>Participating in the NFL Data Bowl Project has been a thrilling journey that has not only heightened my passion for data analytics but also deepened my appreciation for the NFL. Analyzing player tracking, game strategy, and performance predictions has allowed me to view the sport from a fresh perspective, and the camaraderie among fellow participants has made the experience all the more rewarding. </p>
                            <!-- Person Thumb -->
                            <div class="image">
                                <img src="https://media.licdn.com/dms/image/D4E03AQEeURxhjj7u6Q/profile-displayphoto-shrink_800_800/0/1696381486760?e=1701907200&v=beta&t=b3sDKh6AbcJ0NCsrCkUOrDJIgh2slgXS4NscPEs5OKQ" alt="Team Member 1">
                            </div>
                            <!-- Name -->
                            <cite>Andrew Young</cite>
                        </li>
                        <!-- Testimonial -->
                        <li class="item">
                            <!-- Speech -->
                            <p>This experience has been nothing short of transformative, as it has opened my eyes to the immense potential of data analytics in understanding and enhancing the game of football. The challenges presented, such as player tracking, game strategy optimization, and performance predictions, have been both intellectually stimulating and an absolute joy to work on.</p>
                            <!-- Person Thumb -->
                            <div class="image">
                                <img src="https://th.bing.com/th/id/OIP.fvwpZ_XNHymHjnEnN9jNGQAAAA?pid=ImgDet&rs=1" alt="Team Member 2">
                            </div>
                            <!-- Name -->
                            <cite>Alex Trbovic</cite>
                        </li>
                        <!-- Testimonial -->
                        <li class="item">
                            <!-- Speech -->
                            <p>This project has been an exceptional opportunity to fuse data science with a beloved sport. What's truly remarkable is the community that has formed around this initiative, bringing data enthusiasts and football aficionados together to collaborate and share insights. I await looking forward to future opportunities and challenges in the world of sports analytics.</p>
                            <!-- Person Thumb -->
                            <div class="image">
                                <img src="https://media.licdn.com/dms/image/D4D03AQEWyBpHoaUBgw/profile-displayphoto-shrink_200_200/0/1674667542716?e=1701907200&v=beta&t=GIHIkF1KHtwRtXsAGeCTzBvOOmD2uIGbtkbXWJg3LZc" alt="Team Member 3">
                            </div>
                            <!-- Name -->
                            <cite>Lichun Li</cite>
                        </li>
                        <!-- Testimonial -->
                        <li class="item">
                            <!-- Speech -->
                            <p>It's been an incredible journey that's deepened my passion for data science and provided me with a newfound appreciation for the intricacies of the NFL. The challenges offered by this project, spanning player tracking, game strategy optimization, and performance predictions, have been both intellectually stimulating and rewarding.</p>
                            <!-- Person Thumb -->
                            <div class="image">
                                <img src="https://th.bing.com/th/id/OIP.fvwpZ_XNHymHjnEnN9jNGQAAAA?pid=ImgDet&rs=1" alt="Team Member 4">
                            </div>
                            <!-- Name -->
                            <cite>Souhail Marnaoui</cite>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- Team -->
    <section id="contact">
        <div class="container">
            <header>
                <h2>Contact Us</h2>
                <p>If you have any questions or inquiries, please feel free to get in touch with us.</p>
            </header>
            <hr>
            <a href="mailto:engineering@fsu.edu" class="primary-button">Email Us</a>
        </div>
    </section>
    <!-- Testimonial Slider -->
    <script>
        $('.testimonial-slider').slick({
            slidesToShow: 2,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

    </script>
    <script src="src/plugins/slick/slick.min.js"></script>
    <script src="src/plugins/bootstrap/bootstrap.min.js"></script>

    <?php include('src/components/footer.php'); ?>
</body>

</html>