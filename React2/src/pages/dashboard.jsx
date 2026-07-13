import './dashboard.css'
import courses from '../../data/courses'

export default function Dashboard() {
	return (
		<section className="dashboard-page">
			<div className="dashboard-header">
				<p className="dashboard-kicker">Courses</p>
				<h2>Dashboard Courses</h2>
				<p className="dashboard-copy">
					Explore these development courses and choose the right level for your learning path.
				</p>
			</div>

			<div className="course-grid">
				{courses.map((course) => (
					<article className="course-card" key={course.id}>
						<img src={course.image} alt={course.title} className="course-image" />
						<div className="course-content">
							<div className="course-topline">
								<span>{course.level}</span>
								<strong>Rs. {course.price}</strong>
							</div>
							<h3>{course.title}</h3>
							<p>Instructor: {course.instructor}</p>
							<div className="course-footer">
								<span>{course.duration}</span>
								<button type="button">Enroll</button>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
