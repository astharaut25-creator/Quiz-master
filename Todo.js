 const correctPassword = "aashu123";

    // Toggle password visibility
    const passwordInput = document.getElementById("passwordInput");
    const togglePassword = document.getElementById("togglePassword");
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePassword.textContent = type === "password" ? "👁️" : "🙈";
    });

    function checkPassword() {
      const input = passwordInput.value;
      if(input === correctPassword) {
        document.getElementById("passwordSection").style.display = "none";
        document.getElementById("todoSection").style.display = "block";
      } else {
        alert("Wrong Password! Try again.");
      }
    }

    function logout() {
      document.getElementById("passwordSection").style.display = "flex";
      document.getElementById("todoSection").style.display = "none";
      passwordInput.value = "";
    }

    // --- To-Do List code ---
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();
      if (!text) return;

      tasks.push({ text: text, completed: false });
      input.value = "";
      saveTasks();
      renderTasks();
    }

    function renderTasks() {
      const pending = document.getElementById("pendingList");
      const completed = document.getElementById("completedList");
      pending.innerHTML = "";
      completed.innerHTML = "";

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const span = document.createElement("span");
        span.textContent = task.text;
        span.onclick = () => toggleComplete(index);

        const actions = document.createElement("div");
        actions.className = "actions";

        if (!task.completed) {
          const completeBtn = document.createElement("button");
          completeBtn.textContent = "Complete";
          completeBtn.className = "complete-btn";
          completeBtn.onclick = () => toggleComplete(index);
          actions.appendChild(completeBtn);
        }

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTask(index);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);

        if (task.completed) {
          completed.appendChild(li);
        } else {
          pending.appendChild(li);
        }
      });
    }

    function toggleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    }

    function editTask(index) {
      const newText = prompt("Edit task:", tasks[index].text);
      if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();
        saveTasks();
        renderTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    renderTasks();