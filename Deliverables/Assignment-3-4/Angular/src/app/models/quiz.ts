export class Quiz {
    title: string = '';
    score: number = 10;
    questions: string[] = [];

    public toRecord(): Record<string, any> {
        return {
            title: this.title,
            score: this.score,
            questions: this.questions,
        };
    }
}