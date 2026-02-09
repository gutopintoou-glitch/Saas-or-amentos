const storageKey = "saas.quoteRequests";

const getRequests = () => {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error("Erro ao ler storage", error);
    return [];
  }
};

const saveRequests = (requests) => {
  localStorage.setItem(storageKey, JSON.stringify(requests));
};

const formatDate = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleString("pt-BR");
};

const renderDashboard = () => {
  const tableBody = document.querySelector("[data-request-rows]");
  const productsList = document.querySelector("[data-products-list]");
  const emptyState = document.querySelector("[data-empty-state]");
  const preCount = document.querySelector("[data-pre-count]");

  const requests = getRequests();
  if (!tableBody || !productsList) return;

  tableBody.innerHTML = "";
  productsList.innerHTML = "";
  if (preCount) {
    preCount.textContent = requests.filter((request) => request.status !== "Finalizado").length;
  }

  if (requests.length === 0) {
    emptyState?.classList.remove("hidden");
    return;
  }

  emptyState?.classList.add("hidden");

  requests.forEach((request) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${request.companyName}</td>
      <td>${request.requester}</td>
      <td>${formatDate(request.createdAt)}</td>
      <td><span class="status ${request.status === "Finalizado" ? "finalizado" : "pre"}">${request.status}</span></td>
      <td>
        <div class="actions">
          <button class="button button-outline" data-action="details" data-id="${request.id}">Detalhes</button>
          <button class="button button-primary" data-action="finalize" data-id="${request.id}">Finalizar</button>
        </div>
      </td>
    `;
    tableBody.appendChild(row);

    request.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.description} (${item.quantity})`;
      productsList.appendChild(li);
    });
  });

  tableBody.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;

    if (action === "finalize") {
      const updated = requests.map((request) => {
        if (request.id !== id) return request;
        return {
          ...request,
          status: "Finalizado",
          finalizedAt: new Date().toISOString(),
        };
      });
      saveRequests(updated);
      renderDashboard();
    }

    if (action === "details") {
      const selected = requests.find((request) => request.id === id);
      if (!selected) return;
      alert(
        `Pré-orçamento de ${selected.requester}\nEmpresa: ${selected.companyName}\nItens: ${selected.items
          .map((item) => `${item.description} (${item.quantity})`)
          .join(", ")}`
      );
    }
  });
};

const renderPublicForm = () => {
  const form = document.querySelector("[data-quote-form]");
  const itemsContainer = document.querySelector("[data-items-container]");
  const addItemButton = document.querySelector("[data-add-item]");
  const alertBox = document.querySelector("[data-alert]");

  if (!form || !itemsContainer || !addItemButton) return;

  const addItem = () => {
    const wrapper = document.createElement("div");
    wrapper.className = "item";
    wrapper.innerHTML = `
      <label>
        Descrição do item
        <input type="text" name="itemDescription" placeholder="Ex.: Criação de site institucional" required />
      </label>
      <label>
        Quantidade
        <input type="number" name="itemQuantity" min="1" value="1" required />
      </label>
      <label>
        Observações
        <input type="text" name="itemNotes" placeholder="Detalhes extras (opcional)" />
      </label>
      <button type="button" class="button button-outline" data-remove-item>Remover item</button>
    `;
    itemsContainer.appendChild(wrapper);
  };

  addItemButton.addEventListener("click", addItem);

  itemsContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.hasAttribute("data-remove-item")) {
      target.closest(".item")?.remove();
    }
  });

  addItem();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const items = Array.from(itemsContainer.querySelectorAll(".item")).map((item) => ({
      description: item.querySelector("[name='itemDescription']")?.value.trim(),
      quantity: item.querySelector("[name='itemQuantity']")?.value.trim(),
      notes: item.querySelector("[name='itemNotes']")?.value.trim(),
    }));

    const validItems = items.filter((item) => item.description && item.quantity);
    if (validItems.length === 0) {
      alert("Adicione ao menos um item para orçamento.");
      return;
    }

    const newRequest = {
      id: crypto.randomUUID(),
      companyName: formData.get("companyName"),
      requester: formData.get("requester"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      document: formData.get("document"),
      address: formData.get("address"),
      createdAt: new Date().toISOString(),
      status: "Pré-orçamento",
      items: validItems,
    };

    const requests = getRequests();
    saveRequests([newRequest, ...requests]);

    form.reset();
    itemsContainer.innerHTML = "";
    addItem();

    if (alertBox) {
      alertBox.textContent = "Solicitação enviada! Você pode acompanhar a finalização do orçamento.";
      alertBox.classList.remove("hidden");
    }
  });
};

const page = document.body.dataset.page;

if (page === "dashboard") {
  renderDashboard();
}

if (page === "public") {
  renderPublicForm();
}
