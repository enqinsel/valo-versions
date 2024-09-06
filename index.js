let selectedCard = null;

function selectCard(card) {
   
    if (selectedCard) {
        selectedCard.classList.remove('active');
    }
    
    card.classList.add('active');

    selectedCard = card;
}
