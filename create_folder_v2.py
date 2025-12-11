from pathlib import Path
import shutil

desktop = Path(r'C:\Users\Jerry.kim\Desktop')
folder = desktop / '오늘의 엑셀'

# 폴더 생성
folder.mkdir(exist_ok=True)
print(f"폴더 생성: {folder}")

# Excel 파일 찾기 및 이동
excel_exts = {'.xlsx', '.xls', '.xlsm'}
moved = []

for file in desktop.iterdir():
    if file.is_file() and file.suffix.lower() in excel_exts:
        try:
            dest = folder / file.name
            shutil.move(str(file), str(dest))
            moved.append(file.name)
            print(f"이동: {file.name}")
        except Exception as e:
            print(f"오류 {file.name}: {e}")

print(f"\n완료: {len(moved)}개 파일 이동")

