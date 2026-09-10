const draftForm = document.querySelector("#feedback-form");
const draftTitle = document.querySelector("#feedback-title");
const draftContent = document.querySelector("#feedback-content");
const draftStatus = document.querySelector("#draft-status");
const searchInput = document.querySelector("#keyword");
const searchStatus = document.querySelector("#search-status");
const cards = [...document.querySelectorAll("#dashboard-content .widget, #dashboard-content .projects-table")];
const notificationButton = document.querySelector(".notifications");
const notificationStatus = document.querySelector("#notification-status");
const draftStorageKey = "elzero-dashboard-draft";

function restoreDraft() {
  try {
    const savedDraft = localStorage.getItem(draftStorageKey);

    if (!savedDraft) return;

    const { title, content } = JSON.parse(savedDraft);
    draftTitle.value = title || "";
    draftContent.value = content || "";
    draftStatus.textContent = "Your most recent draft was restored.";
  } catch {
    draftStatus.textContent = "Your saved draft could not be restored.";
  }
}

draftForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!draftForm.checkValidity()) {
    draftForm.reportValidity();
    return;
  }

  try {
    localStorage.setItem(
      draftStorageKey,
      JSON.stringify({
        title: draftTitle.value.trim(),
        content: draftContent.value.trim(),
      }),
    );
    draftStatus.textContent = "Draft saved in this browser.";
  } catch {
    draftStatus.textContent = "Draft could not be saved in this browser.";
  }
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCards = 0;

  cards.forEach((card) => {
    const matches = !query || card.textContent.toLowerCase().includes(query);
    card.hidden = !matches;
    visibleCards += Number(matches);
  });

  searchStatus.textContent = query
    ? `${visibleCards} dashboard card${visibleCards === 1 ? "" : "s"} found.`
    : "All dashboard cards are shown.";
});

notificationButton.addEventListener("click", () => {
  notificationStatus.textContent = "You have no new notifications.";
  notificationButton.setAttribute("aria-label", "No new notifications");
});

restoreDraft();
