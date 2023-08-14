import {DefaultUrlSerializer, UrlTree} from "@angular/router";

export class NamedRouterPathSerializer extends DefaultUrlSerializer{

  private _reverseUrl(url: string): string {
    const startIndex = 1;
    const segmentString =
      `(${url.substring(startIndex).split('/').join('//')})`;
    return url.substring(0, startIndex) + segmentString;
  }
  private _beautifyUrl(url: string): string {
    return url
      .replace(/\([\w:/-]+\)/, '')
      /*      .replace(')', '')*/
      .split('//').join('/');
  }

  override parse(url: string): UrlTree {
    return super.parse(url);
  }

  override serialize(tree: UrlTree): string {
    return this._beautifyUrl(super.serialize(tree));
  }

}
