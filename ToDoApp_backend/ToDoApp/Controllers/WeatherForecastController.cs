using Microsoft.AspNetCore.Mvc;

namespace ToDoApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : ControllerBase
    {
        private static List<ToDo> _todoList = new List<ToDo>
        {
            new ToDo { Id = 1, Task = "Read a book", IsCompleted = false },
            new ToDo { Id = 2, Task = "Go to the beach", IsCompleted = false }
        };

        private readonly ILogger<ToDoController> _logger;

        public ToDoController(ILogger<ToDoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ToDo>> Get()
        {
            return Ok(_todoList);
        }

        [HttpPost]
        public ActionResult<ToDo> Post(ToDo newToDo)
        {
            newToDo.Id = _todoList.Count > 0 ? _todoList.Max(t => t.Id) + 1 : 1;
            _todoList.Add(newToDo);
            return Ok(newToDo);
        }

        [HttpDelete("{id}")]
        public ActionResult<ToDo> Delete(int id)
        {

            var item = _todoList[id];
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

    }
}
