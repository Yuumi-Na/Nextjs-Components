import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main>
      <SectionTitle />

      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            code={course.code}
            title={course.title}
            credits={course.credits}
            isOpen={course.isOpen}
          />
        ))}
      </section>
    </main>
  );
}