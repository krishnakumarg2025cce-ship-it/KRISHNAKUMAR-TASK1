import React from "react";
import {
  Activity,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  BarChart3,
  Settings,
  Search,
  Bell,
  ClipboardCheck,
  ListTodo,
  Clock,
  ChevronRight,
  Image,
  Mic,
  Database,
  FileText
} from "lucide-react";

function App() {

  // Dashboard information
  const userName = "KRISHNAKUMAR";

  const statistics = [
    {
      title: "Total Projects",
      value: "24",
      icon: ClipboardCheck,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Total Tasks",
      value: "1,248",
      icon: ListTodo,
      color: "bg-sky-100 text-sky-600"
    },
    {
      title: "Active Members",
      value: "18",
      icon: Users,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Pending Tasks",
      value: "96",
      icon: Clock,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  // Recent tasks
  const tasks = [
    {
      task: "Review AI model performance",
      project: "Image Labeling",
      assignee: "SK",
      status: "Completed"
    },
    {
      task: "Validate dataset",
      project: "Speech to Text",
      assignee: "SP",
      status: "In Progress"
    },
    {
      task: "Update evaluation script",
      project: "Model QA",
      assignee: "AR",
      status: "Pending"
    },
    {
      task: "Prepare OCR report",
      project: "OCR Reporting",
      assignee: "MK",
      status: "In Progress"
    },
    {
      task: "Sync log DB to dataset",
      project: "Data Pipeline",
      assignee: "NK",
      status: "Pending"
    }
  ];

  // Active projects
  const projects = [
    {
      name: "Image Labeling",
      members: "6 members",
      status: "Active",
      icon: Image,
      color: "text-indigo-500 bg-indigo-100"
    },
    {
      name: "Speech to Text",
      members: "4 members",
      status: "Active",
      icon: Mic,
      color: "text-sky-500 bg-sky-100"
    },
    {
      name: "Model QA",
      members: "5 members",
      status: "On Hold",
      icon: ClipboardCheck,
      color: "text-pink-500 bg-pink-100"
    },
    {
      name: "OCR Reporting",
      members: "3 members",
      status: "Active",
      icon: FileText,
      color: "text-green-500 bg-green-100"
    },
    {
      name: "Data Pipeline",
      members: "4 members",
      status: "Active",
      icon: Database,
      color: "text-cyan-500 bg-cyan-100"
    }
  ];

  const navigation = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Projects", icon: FolderKanban },
    { name: "Tasks", icon: CheckSquare },
    { name: "Team", icon: Users },
    { name: "Reports", icon: BarChart3 },
    { name: "Settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-[#f6f7fb] flex items-start">

      {/* SIDEBAR */}

      <aside className="w-60 shrink-0 bg-[#172644] text-white h-screen sticky top-0 p-5 hidden md:block">

        <div className="flex items-center gap-2 text-xl font-bold mb-10">
          <Activity className="text-indigo-400" size={27} />
          <span>PulseWorks AI</span>
        </div>

        <nav className="space-y-2">

          {navigation.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                href="#"
                key={item.name}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
                  index === 0
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </a>
            );
          })}

        </nav>

      </aside>


      {/* MAIN CONTENT */}

      <main className="flex-1 min-w-0 p-5 md:p-8 lg:px-10">

        {/* TOP NAVBAR */}

        <header className="flex items-center justify-between gap-4 mb-9 w-full">

          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3 w-full md:w-96">

            <Search size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search projects, tasks, or team..."
              className="outline-none w-full text-sm"
            />

          </div>

          <div className="hidden lg:flex items-center gap-5 shrink-0">

            <Bell size={20} className="text-slate-500 cursor-pointer" />

            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              {userName.charAt(0)}
            </div>

            <div>
              <p className="text-sm font-semibold">{userName}</p>
              <p className="text-xs text-slate-400">Administrator</p>
            </div>

          </div>

        </header>


        {/* WELCOME SECTION */}

        <section className="mb-8">

          <h1 className="text-2xl font-bold text-slate-800">
            Welcome back, {userName} 👋
          </h1>

          <p className="text-sm text-slate-400 mt-2">
            Here's what's happening at PulseWorks AI today.
          </p>

        </section>


        {/* STATISTICS CARDS */}

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm min-h-[112px]"
              >

                <div className={`${stat.color} p-4 rounded-xl`}>
                  <Icon size={25} />
                </div>

                <div>
                  <p className="text-xs text-slate-400 mb-1">
                    {stat.title}
                  </p>

                  <h2 className="text-2xl font-bold text-slate-800">
                    {stat.value}
                  </h2>
                </div>

              </div>
            );
          })}

        </section>


        {/* RECENT TASKS AND ACTIVE PROJECTS */}

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">


          {/* RECENT TASKS */}

          <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-bold text-base">
                Recent Tasks
              </h2>

              <a href="#" className="text-indigo-600 text-xs">
                View All <ChevronRight size={13} className="inline" />
              </a>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full min-w-[520px] text-left text-xs">

                <thead className="text-slate-400 border-b">

                  <tr>
                    <th className="py-3 pr-3">Task</th>
                    <th className="py-3 pr-3">Project</th>
                    <th className="py-3 pr-3">Assignee</th>
                    <th className="py-3">Status</th>
                  </tr>

                </thead>

                <tbody>

                  {tasks.map((task, index) => (

                    <tr key={index} className="border-b border-slate-100">

                      <td className="py-4 pr-3 font-medium text-slate-700">
                        {task.task}
                      </td>

                      <td className="py-4 pr-3 text-slate-500">
                        {task.project}
                      </td>

                      <td className="py-4 pr-3 text-slate-500">
                        {task.assignee}
                      </td>

                      <td className="py-4">

                        <span className={`px-2 py-1 rounded-full text-[10px] whitespace-nowrap ${
                          task.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : task.status === "In Progress"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                        }`}>
                          {task.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>


          {/* ACTIVE PROJECTS */}

          <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-bold text-base">
                Active Projects
              </h2>

              <a href="#" className="text-indigo-600 text-xs">
                View All <ChevronRight size={13} className="inline" />
              </a>

            </div>

            <div>

              {projects.map((project) => {
                const Icon = project.icon;

                return (

                  <div
                    key={project.name}
                    className="flex items-center gap-3 py-4 border-b border-slate-100"
                  >

                    <div className={`${project.color} p-3 rounded-lg`}>
                      <Icon size={19} />
                    </div>

                    <div className="flex-1">

                      <h3 className="text-sm font-semibold text-slate-700">
                        {project.name}
                      </h3>

                      <p className="text-xs text-slate-400 mt-1">
                        {project.members}
                      </p>

                    </div>

                    <span className={`text-[10px] px-3 py-1 rounded-full ${
                      project.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {project.status}
                    </span>

                  </div>

                );
              })}

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="text-center text-xs text-slate-400 mt-8">
          © 2026 PulseWorks AI. All rights reserved.
        </footer>

      </main>

    </div>
  );
}

export default App;