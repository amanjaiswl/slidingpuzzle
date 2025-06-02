for f in assets/img*.jpg; do
  base=$(basename "$f" .jpg)
  convert "$f" -resize 900x900^ -gravity center -extent 900x900 "assets/${base}.png"
done

