const bookedSlots = ['a1', 'b3'];

function bookAppointment(slot) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bookedSlots.includes(slot.toLowerCase())) {
        reject(new Error(`Slot ${slot} is already taken.`));
      } else {
        resolve(`Slot ${slot} is ready.`);
      }
    }, 1000);
  });
}

async function handleBooking() {
  const input = document.getElementById('slotInput');
  const status = document.getElementById('bookingStatus');

  if (!input || !status) return;

  const slot = input.value.trim();

  if (!slot) {
    status.textContent = 'Please type a slot name first.';
    return;
  }

  status.textContent = 'Trying to book it...';

  try {
    const message = await bookAppointment(slot);
    status.textContent = message;
  } catch (error) {
    status.textContent = error.message;
  }
}

function pingServer() {
  return new Promise((resolve, reject) => {
    const isOnline = Math.random() > 0.3;
    setTimeout(() => {
      if (isOnline) {
        resolve('The server answered.');
      } else {
        reject(new Error('The server did not respond.'));
      }
    }, 700);
  });
}

async function checkServerStatus() {
  const status = document.getElementById('serverStatus');
  if (!status) return;

  status.textContent = 'Pinging server...';

  for (let attempt = 1; attempt <= 5; attempt += 1) {
    try {
      const message = await pingServer();
      status.textContent = `${message} (try ${attempt})`;
      return;
    } catch (error) {
      if (attempt === 5) {
        status.textContent = `It still failed after 5 tries. ${error.message}`;
        return;
      }
      status.textContent = `${error.message} Trying again...`;
    }
  }
}

async function searchMeals() {
  const input = document.getElementById('mealInput');
  const results = document.getElementById('mealResults');
  const status = document.getElementById('mealStatus');

  if (!input || !results || !status) return;

  const ingredient = input.value.trim();

  if (!ingredient) {
    status.textContent = 'Please type an ingredient first.';
    results.innerHTML = '';
    return;
  }

  status.textContent = `Looking for meals with ${ingredient}...`;
  results.innerHTML = '';

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`);
    const data = await response.json();

    if (!data.meals || data.meals.length === 0) {
      status.textContent = 'Nothing matched that ingredient. Try another one.';
      results.innerHTML = '<div class="empty">No meals matched that search.</div>';
      return;
    }

    status.textContent = `Found ${data.meals.length} meal(s).`;
    results.innerHTML = data.meals
      .map((meal) => `
        <div class="meal-card">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <div class="meal-info">
            <h3>${meal.strMeal}</h3>
          </div>
        </div>
      `)
      .join('');
  } catch (error) {
    status.textContent = 'The meal service is not available right now.';
    results.innerHTML = '<div class="empty">Something went wrong while loading meals.</div>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bookBtn')?.addEventListener('click', handleBooking);
  document.getElementById('serverBtn')?.addEventListener('click', checkServerStatus);
  document.getElementById('searchBtn')?.addEventListener('click', searchMeals);
});
