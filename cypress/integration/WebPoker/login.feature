Feature: Web Poker

	@ps
	Scenario: logging in
		Given I open WebPoker page
		Then I see "PokerStars" in the title
		When I login