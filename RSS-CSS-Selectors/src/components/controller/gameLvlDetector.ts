class DetectGameLvl {
    public getDataFromLS(): string {
        const currentLevel: string | null = localStorage.getItem('current_level');
        if (currentLevel) return currentLevel;
        return '1';
    }
}
export default DetectGameLvl;
