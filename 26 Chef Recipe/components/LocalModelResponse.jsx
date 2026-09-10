function formatInline(text) {
  return text.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function RecipeMarkdown({ content }) {
  const lines = content.trim().split(/\r?\n/);
  const elements = [];
  let listItems = [];
  let listType = null;

  function addList() {
    if (!listItems.length) return;

    const List = listType === "ordered" ? "ol" : "ul";
    elements.push(
      <List key={`list-${elements.length}`}>
        {listItems.map((item, index) => <li key={index}>{formatInline(item)}</li>)}
      </List>
    );
    listItems = [];
    listType = null;
  }

  lines.forEach((line) => {
    const orderedMatch = line.match(/^\s*\d+\.\s+(.*)$/);
    const unorderedMatch = line.match(/^\s*[-*+]\s+(.*)$/);
    const headingMatch = line.match(/^#{1,3}\s+(.*)$/);

    if (orderedMatch || unorderedMatch) {
      const nextType = orderedMatch ? "ordered" : "unordered";
      if (listType && listType !== nextType) addList();
      listType = nextType;
      listItems.push((orderedMatch || unorderedMatch)[1]);
      return;
    }

    addList();
    if (line.trim()) {
      elements.push(
        headingMatch
          ? <h2 key={`heading-${elements.length}`}>{formatInline(headingMatch[1])}</h2>
          : <p key={`paragraph-${elements.length}`}>{formatInline(line)}</p>
      );
    }
  });

  addList();
  return elements;
}

export default function LocalModelResponse({ recipe, isLoading, error }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      {isLoading && <p className="recipe-status"><span className="loading-dot" aria-hidden="true" />Creating your recipe...</p>}
      {error && <p className="recipe-error" role="alert">{error}</p>}
      {!isLoading && !error && recipe && <RecipeMarkdown content={recipe} />}
    </section>
  );
}
