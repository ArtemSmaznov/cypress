Feature: Google

	@google
	Scenario: Opening a social network page
		Given I open Google page
		Then I see "Google" in the title