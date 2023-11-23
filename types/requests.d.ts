  type AddStudent = {
      Body: {
        name: string;
        email: string;
        details: string;
      }
  }

  type AddCourse = {
    Body: {
      name: string;
      duration: number;
    }
  }

  type AddFaculty = {
    Body: {
      name: string;
      courseId: number;
    }
  }

  type AddCourseStudent = {
    Body: {
      studentId: number;
      courseId: number;
      assignedAt: string | undefined;
    }
  }
  