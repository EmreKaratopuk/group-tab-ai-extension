export const oneTabPrompt: string = `
I want you can help me to grounping my tabs.
I will type one url and some grounp I have.
I want you to only reply the gourp name that I have or you want with one unique code block, and nothing else.
Do not write explanations.
Do not type other word.
My first URL is
`
export function allTabsPrompt(tabs: chrome.tabs.Tab[]): string {
  const limtedTabs = tabs.slice(0, 100)
  const modifiedTabs = limtedTabs.map((tab) => {
    return {
      id: tab.id,
      title: tab.title
    }
  })
  return `I want you can help me to grounping my tabs. I will give you some titles and id of tabs.
I want you to group my tabs and the group cannot exceed 5.
And I want you to only reply the gourp name and ids array with json format, and nothing else.
The Format is [{group_name: string, ids: number[]}]
Do not write explanations. Do not type other word.
My url list is ${JSON.stringify(modifiedTabs)}`
}

type response = { group_name: string; ids: number[] }