interface IsDirectory {
  (path: string, cb: (err: any, dir: boolean) => void): string;
  sync(path: string): boolean;
}

declare const isDirectory: IsDirectory;
export = isDirectory;
