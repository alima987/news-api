import './sources.css';

class Sources {
    public draw(data: { id: string; name: string }[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: { id: string; name: string }) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceCloneName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceCloneName.textContent = item.name;

            const sourceCloneItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceCloneItem.dataset.sourceId = item.id;

            fragment.append(sourceClone);
        });
        const sourcesCloneContainer = document.querySelector('.sources') as HTMLElement;
        sourcesCloneContainer.append(fragment);
    }
}

export default Sources;
