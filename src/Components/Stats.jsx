export default function Stats({ works }) {
  if (!works.length) {
    return (
      <p className="stats">
        <em>Start adding your work to begin the list 🚀</em>
      </p>
    );
  }
  const numWorks = works.length;
  const undoneWork = works.filter((work) => !work.done).length;
  const doneWork = works.filter((work) => work.done).length;

  const percentage = Math.round((doneWork / numWorks) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything done🎉🎉🎉"
          : `✍️You have ${numWorks} works on your list, and your pending works are
        ${undoneWork}. Completed: (${percentage}%)👍`}
      </em>
    </footer>
  );
}
